<template>
  <div class="audio-player" :class="{ 'audio-player--playing': isPlaying }">
    <audio
      ref="audio"
      :src="src"
      preload="metadata"
      @loadedmetadata="onLoadedMetadata"
      @timeupdate="onTimeUpdate"
      @play="isPlaying = true"
      @pause="isPlaying = false"
      @ended="onEnded"
      @error="hasError = true"
    ></audio>

    <p v-if="hasError" class="audio-player__error">Le fichier audio n'a pas pu être chargé.</p>

    <template v-else>
      <div class="audio-player__timeline">
        <span class="audio-player__time">{{ formatTime(currentTime) }}</span>
        <input
          type="range"
          class="audio-player__range audio-player__progress"
          min="0"
          :max="duration || 0"
          step="0.1"
          :value="currentTime"
          :style="{ '--fill': progressPercent + '%' }"
          aria-label="Position dans l'épisode"
          @input="onSeek"
          @change="onSeek"
        />
        <span class="audio-player__time">{{ formatTime(duration) }}</span>
      </div>

      <div class="audio-player__top">
        <div class="audio-player__controls">
          <button
            type="button"
            class="audio-player__btn audio-player__skip"
            aria-label="Reculer de 10 secondes"
            title="Reculer de 10 secondes"
            @click="skip(-10)"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 5V2L7 6l5 4V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8z"
              />
            </svg>
            <span class="audio-player__skip-label">10</span>
          </button>

          <button
            type="button"
            class="audio-player__btn audio-player__play"
            :aria-label="isPlaying ? 'Pause' : 'Lecture'"
            :title="isPlaying ? 'Pause' : 'Lecture'"
            @click="togglePlay"
          >
            <svg v-if="isPlaying" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
            </svg>
            <svg v-else viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>

          <button
            type="button"
            class="audio-player__btn audio-player__skip"
            aria-label="Avancer de 10 secondes"
            title="Avancer de 10 secondes"
            @click="skip(10)"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 5V2l5 4-5 4V7c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6h2c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8z"
              />
            </svg>
            <span class="audio-player__skip-label">10</span>
          </button>
        </div>

        <div class="audio-player__volume">
          <button
            type="button"
            class="audio-player__btn audio-player__mute"
            :aria-label="isMuted ? 'Réactiver le son' : 'Couper le son'"
            :title="isMuted ? 'Réactiver le son' : 'Couper le son'"
            @click="toggleMute"
          >
            <svg v-if="isMuted || volume === 0" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M16.5 12A4.5 4.5 0 0 0 14 8v2.2l2.5 2.5V12zM19 12c0 .9-.2 1.8-.5 2.6l1.5 1.5A8.8 8.8 0 0 0 21 12c0-4.3-3-7.9-7-8.8v2.1c2.9.9 5 3.5 5 6.7zM4.3 3 3 4.3 7.7 9H3v6h4l5 5v-6.7l4.3 4.3c-.7.5-1.4.9-2.3 1.2v2.1c1.4-.3 2.6-1 3.7-1.8l2 2 1.3-1.3L4.3 3zM12 4 9.9 6.1 12 8.2V4z"
              />
            </svg>
            <svg v-else viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1c2.9.9 5 3.5 5 6.7s-2.1 5.8-5 6.7v2.1c4-.9 7-4.5 7-8.8s-3-7.9-7-8.8z"
              />
            </svg>
          </button>
          <input
            type="range"
            class="audio-player__range audio-player__volume-range"
            min="0"
            max="1"
            step="0.05"
            :value="isMuted ? 0 : volume"
            :style="{ '--fill': (isMuted ? 0 : volume * 100) + '%' }"
            aria-label="Volume"
            @input="onVolumeInput"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
const VOLUME_STORAGE_KEY = 'geekzone-audio-volume';
const DEFAULT_VOLUME = 0.7;

export default {
  name: 'AudioPlayerComponent',
  props: {
    src: { type: String, required: true },
  },
  data() {
    return {
      isPlaying: false,
      currentTime: 0,
      duration: 0,
      volume: DEFAULT_VOLUME,
      isMuted: false,
      hasError: false,
    };
  },
  computed: {
    progressPercent() {
      if (!this.duration) return 0;
      return Math.min(100, (this.currentTime / this.duration) * 100);
    },
  },
  mounted() {
    this.volume = this.readStoredVolume();
    this.applyVolume();
  },
  beforeUnmount() {
    const audio = this.$refs.audio;
    if (audio && !audio.paused) audio.pause();
  },
  methods: {
    togglePlay() {
      const audio = this.$refs.audio;
      if (!audio) return;
      if (audio.paused) {
        const result = audio.play();
        if (result && typeof result.catch === 'function') {
          result.catch(() => {
            this.isPlaying = false;
          });
        }
      } else {
        audio.pause();
      }
    },
    skip(seconds) {
      const audio = this.$refs.audio;
      if (!audio) return;
      const target = Math.min(Math.max(0, audio.currentTime + seconds), this.duration || 0);
      audio.currentTime = target;
      this.currentTime = target;
    },
    onSeek(event) {
      const audio = this.$refs.audio;
      const value = Number(event.target.value);
      this.currentTime = value;
      if (audio) audio.currentTime = value;
    },
    onLoadedMetadata() {
      const audio = this.$refs.audio;
      if (audio && Number.isFinite(audio.duration)) this.duration = audio.duration;
    },
    onTimeUpdate() {
      const audio = this.$refs.audio;
      if (audio) this.currentTime = audio.currentTime;
    },
    onEnded() {
      this.isPlaying = false;
      this.currentTime = 0;
      const audio = this.$refs.audio;
      if (audio) audio.currentTime = 0;
    },
    toggleMute() {
      this.isMuted = !this.isMuted;
      this.applyVolume();
    },
    onVolumeInput(event) {
      this.volume = Number(event.target.value);
      this.isMuted = false;
      this.applyVolume();
      this.storeVolume();
    },
    applyVolume() {
      const audio = this.$refs.audio;
      if (!audio) return;
      audio.volume = this.volume;
      audio.muted = this.isMuted;
    },
    readStoredVolume() {
      try {
        const stored = Number(localStorage.getItem(VOLUME_STORAGE_KEY));
        if (Number.isFinite(stored) && stored >= 0 && stored <= 1 && localStorage.getItem(VOLUME_STORAGE_KEY) !== null) {
          return stored;
        }
      } catch (e) {
        // localStorage indisponible (navigation privée, etc.) : on garde le volume par défaut
      }
      return DEFAULT_VOLUME;
    },
    storeVolume() {
      try {
        localStorage.setItem(VOLUME_STORAGE_KEY, String(this.volume));
      } catch (e) {
        // ignoré
      }
    },
    formatTime(seconds) {
      if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
      const total = Math.floor(seconds);
      const h = Math.floor(total / 3600);
      const m = Math.floor((total % 3600) / 60);
      const s = total % 60;
      const mm = h ? String(m).padStart(2, '0') : String(m);
      const ss = String(s).padStart(2, '0');
      return h ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
    },
  },
};
</script>

<style>
.audio-player {
  --ap-fg: rgb(200, 200, 200);
  --ap-bg: #1c1c1c;
  --ap-border: rgba(200, 200, 200, 0.5);
  --ap-track: #3a3a3a;

  width: 100%;
  max-width: 480px;
  margin: 16px auto;
  padding: 12px 14px;
  box-sizing: border-box;
  border: 2px solid var(--ap-border);
  border-radius: 12px;
  background-color: var(--ap-bg);
  color: var(--ap-fg);
  font-family: 'MadimiOne-Regular', sans-serif;
}

.audio-player__top {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px 22px;
  margin-top: 10px;
}

.audio-player__controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

/* Les boutons du lecteur ont leur propre style, plus compact que les boutons du site */
.audio-player .audio-player__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0;
  padding: 0;
  width: 36px;
  height: 36px;
  border: 2px solid var(--ap-border);
  border-radius: 50%;
  background-color: #252525;
  color: var(--ap-fg);
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.1s ease;
}

.audio-player .audio-player__btn:hover,
.audio-player .audio-player__btn:focus-visible {
  background-color: #515151;
  border-color: var(--ap-fg);
  outline: none;
}

.audio-player .audio-player__btn:active {
  transform: scale(0.95);
}

.audio-player .audio-player__play {
  width: 46px;
  height: 46px;
}

.audio-player__btn svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

.audio-player .audio-player__play svg {
  width: 26px;
  height: 26px;
}

.audio-player__skip-label {
  position: absolute;
  font-size: 9px;
  line-height: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -30%);
}

.audio-player__timeline,
.audio-player__volume {
  display: flex;
  align-items: center;
  gap: 10px;
}

.audio-player__volume {
  gap: 6px;
}

.audio-player .audio-player__mute {
  width: 30px;
  height: 30px;
}

.audio-player .audio-player__mute svg {
  width: 16px;
  height: 16px;
}

.audio-player__time {
  font-size: 14px;
  min-width: 42px;
  text-align: center;
  font-variant-numeric: tabular-nums;
}

/* Curseurs : piste sombre, partie lue en clair, poignée ronde */
.audio-player__range {
  -webkit-appearance: none;
  appearance: none;
  flex: 1;
  height: 6px;
  margin: 0;
  border-radius: 3px;
  background: linear-gradient(to right, var(--ap-fg) var(--fill, 0%), var(--ap-track) var(--fill, 0%));
  outline: none;
  cursor: pointer;
}

.audio-player__volume-range {
  flex: none;
  width: 100px;
}

.audio-player__range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--ap-fg);
  border: 2px solid var(--ap-bg);
  transition: transform 0.1s ease;
}

.audio-player__range::-moz-range-thumb {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--ap-fg);
  border: 2px solid var(--ap-bg);
}

.audio-player__range::-moz-range-track {
  background: transparent;
}

.audio-player__range:hover::-webkit-slider-thumb,
.audio-player__range:focus-visible::-webkit-slider-thumb {
  transform: scale(1.2);
}

.audio-player__error {
  margin: 0;
  text-align: center;
}

@media (max-width: 600px) {
  .audio-player {
    padding: 12px;
  }
  .audio-player__top {
    gap: 6px 14px;
  }
  .audio-player__volume-range {
    width: 70px;
  }
  .audio-player__time {
    font-size: 13px;
    min-width: 38px;
  }
}
</style>
