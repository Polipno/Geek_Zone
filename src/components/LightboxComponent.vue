<template>
  <Transition name="lightbox-fade">
    <div
      v-if="isOpen"
      class="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Image agrandie"
      @click.self="close"
      @touchstart.passive="onTouchStart"
      @touchend.passive="onTouchEnd"
    >
      <button
        ref="closeButton"
        type="button"
        class="lightbox__btn lightbox__close"
        aria-label="Fermer"
        @click="close"
      >
        &times;
      </button>

      <button
        v-if="hasMany"
        type="button"
        class="lightbox__btn lightbox__nav lightbox__prev"
        aria-label="Image précédente"
        @click="prev"
      >
        &#8249;
      </button>

      <figure class="lightbox__figure" @click.self="close">
        <img :key="current.src" :src="current.src" :alt="current.alt" class="lightbox__img" />
        <figcaption class="lightbox__caption">
          <span>{{ current.alt }}</span>
          <span v-if="hasMany" class="lightbox__counter">{{ index + 1 }} / {{ images.length }}</span>
        </figcaption>
      </figure>

      <button
        v-if="hasMany"
        type="button"
        class="lightbox__btn lightbox__nav lightbox__next"
        aria-label="Image suivante"
        @click="next"
      >
        &#8250;
      </button>
    </div>
  </Transition>
</template>

<script>
// Lightbox globale : s'ouvre au clic sur n'importe quelle image de classe "Image"
// qui n'est pas déjà un lien (les affiches de la grille Review restent des liens).
// Si l'image est dans une galerie (.image-gallery), on peut naviguer entre ses images.
const SWIPE_MIN_DISTANCE = 50;

export default {
  name: 'LightboxComponent',
  data() {
    return {
      isOpen: false,
      images: [],
      index: 0,
      touchStartX: null,
    };
  },
  computed: {
    current() {
      return this.images[this.index] || { src: '', alt: '' };
    },
    hasMany() {
      return this.images.length > 1;
    },
  },
  mounted() {
    document.addEventListener('click', this.onDocumentClick);
    document.addEventListener('keydown', this.onKeydown);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.onDocumentClick);
    document.removeEventListener('keydown', this.onKeydown);
    this.unlockScroll();
  },
  methods: {
    isZoomable(img) {
      return Boolean(img && img.matches('img.Image') && !img.closest('a'));
    },
    onDocumentClick(event) {
      const img = event.target.closest ? event.target.closest('img') : null;
      if (!this.isZoomable(img)) return;

      event.preventDefault();
      const gallery = img.closest('.image-gallery');
      const list = gallery ? Array.from(gallery.querySelectorAll('img.Image')) : [img];
      this.open(
        list.map((el) => ({ src: el.currentSrc || el.src, alt: el.alt })),
        Math.max(0, list.indexOf(img))
      );
    },
    open(images, index = 0) {
      if (!images.length) return;
      this.images = images;
      this.index = index;
      this.isOpen = true;
      this.lockScroll();
      this.$nextTick(() => {
        if (this.$refs.closeButton) this.$refs.closeButton.focus();
      });
    },
    close() {
      this.isOpen = false;
      this.unlockScroll();
    },
    prev() {
      if (!this.hasMany) return;
      this.index = (this.index - 1 + this.images.length) % this.images.length;
    },
    next() {
      if (!this.hasMany) return;
      this.index = (this.index + 1) % this.images.length;
    },
    onKeydown(event) {
      if (!this.isOpen) return;
      if (event.key === 'Escape') this.close();
      else if (event.key === 'ArrowLeft') this.prev();
      else if (event.key === 'ArrowRight') this.next();
    },
    onTouchStart(event) {
      this.touchStartX = event.changedTouches[0].clientX;
    },
    onTouchEnd(event) {
      if (this.touchStartX === null) return;
      const delta = event.changedTouches[0].clientX - this.touchStartX;
      this.touchStartX = null;
      if (Math.abs(delta) < SWIPE_MIN_DISTANCE) return;
      if (delta > 0) this.prev();
      else this.next();
    },
    lockScroll() {
      document.body.style.overflow = 'hidden';
    },
    unlockScroll() {
      document.body.style.overflow = '';
    },
  },
};
</script>

<style>
/* Les images agrandissables (hors liens) affichent une loupe au survol */
img.Image:not(a img) {
  cursor: zoom-in;
}

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.92);
  padding: 16px;
  box-sizing: border-box;
}

.lightbox__figure {
  margin: 0;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.lightbox__img {
  max-width: 100%;
  max-height: calc(100vh - 110px);
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 10px;
  border: 2px solid rgba(200, 200, 200, 0.5);
  background-color: #252525;
  cursor: default;
}

.lightbox__caption {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px 18px;
  color: rgb(200, 200, 200);
  font-size: 18px;
  text-align: center;
}

.lightbox__counter {
  opacity: 0.7;
}

.lightbox__btn {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 0;
  border: 2px solid rgba(200, 200, 200, 0.5);
  border-radius: 50%;
  background-color: #252525;
  color: rgb(200, 200, 200);
  font-size: 32px;
  line-height: 1;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.lightbox__btn:hover,
.lightbox__btn:focus-visible {
  background-color: #3a3a3a;
  border-color: rgb(200, 200, 200);
  outline: none;
}

.lightbox__close {
  top: 16px;
  right: 16px;
}

.lightbox__nav {
  top: 50%;
  transform: translateY(-50%);
}

.lightbox__prev {
  left: 16px;
}

.lightbox__next {
  right: 16px;
}

.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.2s ease;
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}

@media (max-width: 600px) {
  .lightbox {
    padding: 8px;
  }
  .lightbox__img {
    max-height: calc(100vh - 140px);
  }
  .lightbox__caption {
    font-size: 16px;
  }
  .lightbox__btn {
    width: 40px;
    height: 40px;
    font-size: 26px;
  }
  .lightbox__close {
    top: 8px;
    right: 8px;
  }
  .lightbox__prev {
    left: 8px;
  }
  .lightbox__next {
    right: 8px;
  }
}
</style>
