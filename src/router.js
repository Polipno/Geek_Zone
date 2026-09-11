import { createRouter, createWebHashHistory } from 'vue-router';

import Index from './components/IndexComponent.vue';
import Contact from './components/ContactComponent.vue';
import ReviewComponent from './components/ReviewComponent.vue';
import LetsPlay from './components/LetsPlayComponent.vue';
import Wishlist from './components/WishlistComponent.vue';
import Question from './components/QuestionComponent.vue';
import Podcast from './components/PodcastComponent.vue';
import AnotherCodeRecollection from './components/Game_Review/AnotherCodeRecollectionComponent.vue';
import MarioVsDonkeyKong from './components/Game_Review/MarioVsDonkeyKongComponent.vue';
import PrincessPeachShowtime from './components/Game_Review/PrincessPeachShowtimeComponent.vue';
import PaperMarioLaPorteMillenaire from './components/Game_Review/PaperMarioLaPorteMillenaireComponent.vue';
import LuigisMansion2HD from './components/Game_Review/LuigisMansion2HDComponent.vue';
import ZeldaEchoesOfWisdom from './components/Game_Review/ZeldaEchoesOfWisdomComponent.vue';
import SuperMarioPartyJamboree from './components/Game_Review/SuperMarioPartyJamboreeComponent.vue';
import MarioLuigiLepopeeFraternelle from './components/Game_Review/MarioLuigiLepopeeFraternelleComponent.vue';
import DonkeyKongCountryReturnsHD from './components/Game_Review/DonkeyKongCountryReturnsHDComponent.vue';
import MarioKartWorld from './components/Game_Review/MarioKartWorldComponent.vue';
import DonkeyKongBananza from './components/Game_Review/DonkeyKongBananzaComponent.vue';
import SuperMarioGalaxyAndSuperMarioGalaxy2 from './components/Game_Review/SuperMarioGalaxyAndSuperMarioGalaxy2Component.vue';
import KirbyAirRiders from './components/Game_Review/KirbyAirRidersComponent.vue';
import SplitFiction from './components/Game_Review/SplitFictionComponent.vue';
import PlanetOfLana from './components/Game_Review/PlanetOfLanaComponent.vue';
import SilentHillF from './components/Game_Review/SilentHillFComponent.vue';
import LittleNightmaresIII from './components/Game_Review/LittleNightmaresIIIComponent.vue';
import MarioTennisFever from './components/Game_Review/MarioTennisFeverComponent.vue';
import ResidentEvilRequiem from './components/Game_Review/ResidentEvilRequiemComponent.vue';
import YoshiEtLeLivreMysterieux from './components/Game_Review/YoshiEtLeLivreMysterieuxComponent.vue';
import Directive8020 from './components/Game_Review/Directive8020Component.vue';
import StarFox from './components/Game_Review/StarFoxComponent.vue';
import ItTakesTwo from './components/Game_Review/ItTakesTwoComponent.vue';
import Marsupilami2 from './components/Game_Review/Marsupilami2Component.vue';
import ZeldaOcarinaOfTime from './components/Game_Review/ZeldaOcarinaOfTimeComponent.vue';
import StrangerThanHeaven from './components/Game_Review/StrangerThanHeavenComponent.vue';
import LetsPlayReanimal from './components/Lets_Play/LetsPlayReanimalComponent.vue';
import LetsPlayAHighlandSong from './components/Lets_Play/LetsPlayAHighlandSongComponent.vue';
import LetsPlayAShortHike from './components/Lets_Play/LetsPlayAShortHikeComponent.vue';
import PassionPixel from './components/Podcast/PassionPixelComponent.vue';
import Impressum from './components/ImpressumComponent.vue';
import ConditionDutilisation from './components/ConditionDutilisationComponent.vue';
import ProtectionDesDonnees from './components/ProtectionDesDonneesComponent.vue';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
      menu: 'base',
      title: 'Accueil',
      description: "Geek Zone, un site dédié à la passion du jeu vidéo : reviews, Let's Play, wishlist, quiz et podcast.",
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      menu: 'base',
      title: 'Contact',
      description: 'Contactez le créateur du site Geek Zone.',
    },
  },
  {
    path: '/review',
    name: 'Review',
    component: ReviewComponent,
    meta: {
      menu: 'base',
      title: 'Review',
      description: "Toutes les reviews de jeux vidéo de Geek Zone : informations, histoire, ressenti et captures d'écran.",
    },
  },
  {
    path: '/letsplay',
    name: 'LetsPlay',
    component: LetsPlay,
    meta: {
      menu: 'base',
      title: "Let's Play",
      description: "Les Let's Play de Geek Zone : des jeux découverts en vidéo commentée.",
    },
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: Wishlist,
    meta: {
      menu: 'base',
      title: 'Wishlist',
      description: 'La wishlist de Geek Zone : les jeux les plus attendus et leurs bandes-annonces.',
    },
  },
  {
    path: '/question',
    name: 'Question',
    component: Question,
    meta: {
      menu: 'base',
      title: 'Question',
      description: 'Testez vos connaissances sur le jeu vidéo avec le quiz de Geek Zone.',
    },
  },
  {
    path: '/podcast',
    name: 'Podcast',
    component: Podcast,
    meta: {
      menu: 'base',
      title: 'Podcast',
      description: 'Les podcasts de Geek Zone, dont Passion Pixel où des invités parlent de leur jeu de cœur.',
    },
  },
  {
    path: '/another_code_recollection',
    name: 'AnotherCodeRecollection',
    component: AnotherCodeRecollection,
    meta: {
      menu: 'game',
      title: 'Another Code Recollection',
      description: "Review de Another Code Recollection sur Geek Zone : informations, histoire, mon ressenti et captures d'écran.",
    },
  },
  {
    path: '/mario_vs_donkey_kong',
    name: 'MarioVsDonkeyKong',
    component: MarioVsDonkeyKong,
    meta: {
      menu: 'game',
      title: 'Mario vs. Donkey Kong',
      description: "Review de Mario vs. Donkey Kong sur Geek Zone : informations, histoire, mon ressenti et captures d'écran.",
    },
  },
  {
    path: '/princess_peach_showtime',
    name: 'PrincessPeachShowtime',
    component: PrincessPeachShowtime,
    meta: {
      menu: 'game',
      title: 'Princess Peach Showtime',
      description: "Review de Princess Peach Showtime sur Geek Zone : informations, histoire, mon ressenti et captures d'écran.",
    },
  },
  {
    path: '/paper_mario_la_porte_millenaire',
    name: 'PaperMarioLaPorteMillenaire',
    component: PaperMarioLaPorteMillenaire,
    meta: {
      menu: 'game',
      title: 'Paper Mario La Porte Millénaire',
      description: "Review de Paper Mario La Porte Millénaire sur Geek Zone : informations, histoire, mon ressenti et captures d'écran.",
    },
  },
  {
    path: '/luigis_mansion_2_hd',
    name: 'LuigisMansion2HD',
    component: LuigisMansion2HD,
    meta: {
      menu: 'game',
      title: "Luigi's Mansion 2 HD",
      description: "Review de Luigi's Mansion 2 HD sur Geek Zone : informations, histoire, mon ressenti et captures d'écran.",
    },
  },
  {
    path: '/zelda_echoes_of_wisdom',
    name: 'ZeldaEchoesOfWisdom',
    component: ZeldaEchoesOfWisdom,
    meta: {
      menu: 'game',
      title: 'Zelda Echoes Of Wisdom',
      description: "Review de Zelda Echoes Of Wisdom sur Geek Zone : informations, histoire, mon ressenti et captures d'écran.",
    },
  },
  {
    path: '/super_mario_party_jamboree',
    name: 'SuperMarioPartyJamboree',
    component: SuperMarioPartyJamboree,
    meta: {
      menu: 'game',
      title: 'Super Mario Party Jamboree',
      description: "Review de Super Mario Party Jamboree sur Geek Zone : informations, histoire, mon ressenti et captures d'écran.",
    },
  },
  {
    path: '/mario_and_luigi_lepopee_fraternelle',
    name: 'MarioAndLuigiLepoppeFraternelle',
    component: MarioLuigiLepopeeFraternelle,
    meta: {
      menu: 'game',
      title: "Mario & Luigi L'Épopée Fraternelle",
      description: "Review de Mario & Luigi L'Épopée Fraternelle sur Geek Zone : informations, histoire, mon ressenti et captures d'écran.",
    },
  },
  {
    path: '/donkey_kong_returns_hd',
    name: 'DonkeyKongReturnsHD',
    component: DonkeyKongCountryReturnsHD,
    meta: {
      menu: 'game',
      title: 'Donkey Kong Country Returns HD',
      description: "Review de Donkey Kong Country Returns HD sur Geek Zone : informations, histoire, mon ressenti et captures d'écran.",
    },
  },
  {
    path: '/mario_kart_world',
    name: 'MarioKartWorld',
    component: MarioKartWorld,
    meta: {
      menu: 'game',
      title: 'Mario Kart World',
      description: "Review de Mario Kart World sur Geek Zone : informations, histoire, mon ressenti et captures d'écran.",
    },
  },
  {
    path: '/donkey_kong_bananza',
    name: 'DonkeyKongBananza',
    component: DonkeyKongBananza,
    meta: {
      menu: 'game',
      title: 'Donkey Kong Bananza',
      description: "Review de Donkey Kong Bananza sur Geek Zone : informations, histoire, mon ressenti et captures d'écran.",
    },
  },
  {
    path: '/super_mario_galaxy_and_super_mario_galaxy_2',
    name: 'SuperMarioGalaxyAndSuperMarioGalaxy2',
    component: SuperMarioGalaxyAndSuperMarioGalaxy2,
    meta: {
      menu: 'game',
      title: 'Super Mario Galaxy + Super Mario Galaxy 2',
      description: "Review de Super Mario Galaxy + Super Mario Galaxy 2 sur Geek Zone : informations, histoire, mon ressenti et captures d'écran.",
    },
  },
  {
    path: '/kirby_air_riders',
    name: 'KirbyAirRiders',
    component: KirbyAirRiders,
    meta: {
      menu: 'game',
      title: 'Kirby Air Riders',
      description: "Review de Kirby Air Riders sur Geek Zone : informations, histoire, mon ressenti et captures d'écran.",
    },
  },
  {
    path: '/split_fiction',
    name: 'SplitFiction',
    component: SplitFiction,
    meta: {
      menu: 'game',
      title: 'Split Fiction',
      description: "Review de Split Fiction sur Geek Zone : informations, histoire, mon ressenti et captures d'écran.",
    },
  },
  {
    path: '/planet_of_lana',
    name: 'PlanetOfLana',
    component: PlanetOfLana,
    meta: {
      menu: 'game',
      title: 'Planet of Lana',
      description: "Review de Planet of Lana sur Geek Zone : informations, histoire, mon ressenti et captures d'écran.",
    },
  },
  {
    path: '/silent_hill_f',
    name: 'SilentHillF',
    component: SilentHillF,
    meta: {
      menu: 'game',
      title: 'Silent Hill f',
      description: "Review de Silent Hill f sur Geek Zone : informations, histoire, mon ressenti et captures d'écran.",
    },
  },
  {
    path: '/little_nightmares_iii',
    name: 'LittleNightmaresIII',
    component: LittleNightmaresIII,
    meta: {
      menu: 'game',
      title: 'Little Nightmares III',
      description: "Review de Little Nightmares III sur Geek Zone : informations, histoire, mon ressenti et captures d'écran.",
    },
  },
  {
    path: '/mario_tennis_fever',
    name: 'MarioTennisFever',
    component: MarioTennisFever,
    meta: {
      menu: 'game',
      title: 'Mario Tennis Fever',
      description: "Review de Mario Tennis Fever sur Geek Zone : informations, histoire, mon ressenti et captures d'écran.",
    },
  },
  {
    path: '/resident_evil_requiem',
    name: 'ResidentEvilRequiem',
    component: ResidentEvilRequiem,
    meta: {
      menu: 'game',
      title: 'Resident Evil Requiem',
      description: "Review de Resident Evil Requiem sur Geek Zone : informations, histoire, mon ressenti et captures d'écran.",
    },
  },
  {
    path: '/yoshi_et_le_livre_mysterieux',
    name: 'YoshiEtLeLivreMysterieux',
    component: YoshiEtLeLivreMysterieux,
    meta: {
      menu: 'game',
      title: 'Yoshi et le Livre Mystérieux',
      description: "Review de Yoshi et le Livre Mystérieux sur Geek Zone : informations, histoire, mon ressenti et captures d'écran.",
    },
  },
  {
    path: '/directive_8020',
    name: 'Directive8020',
    component: Directive8020,
    meta: {
      menu: 'game',
      title: 'Directive 8020',
      description: "Review de Directive 8020 sur Geek Zone : informations, histoire, mon ressenti et captures d'écran.",
    },
  },
  {
    path: '/star_fox',
    name: 'StarFox',
    component: StarFox,
    meta: {
      menu: 'game',
      title: 'Star Fox',
      description: "Review de Star Fox sur Geek Zone : informations, histoire, mon ressenti et captures d'écran.",
    },
  },
  {
    path: '/it_takes_two',
    name: 'ItTakesTwo',
    component: ItTakesTwo,
    meta: {
      menu: 'game',
      title: 'It Takes Two',
      description: "Review de It Takes Two sur Geek Zone : informations, histoire, mon ressenti et captures d'écran.",
    },
  },
  {
    path: '/marsupilami_2',
    name: 'Marsupilami2',
    component: Marsupilami2,
    meta: {
      menu: 'game',
      title: 'Marsupilami 2 : Salsa Palombia',
      description: "Review de Marsupilami 2 : Salsa Palombia sur Geek Zone : informations, histoire, mon ressenti et captures d'écran.",
    },
  },
  {
    path: '/zelda_ocarina_of_time',
    name: 'ZeldaOcarinaOfTime',
    component: ZeldaOcarinaOfTime,
    meta: {
      menu: 'game',
      title: 'The Legend of Zelda : Ocarina of Time',
      description: "Review de The Legend of Zelda : Ocarina of Time sur Geek Zone : informations, histoire, mon ressenti et captures d'écran.",
    },
  },
  {
    path: '/stranger_than_heaven',
    name: 'StrangerThanHeaven',
    component: StrangerThanHeaven,
    meta: {
      menu: 'game',
      title: 'Stranger Than Heaven',
      description: "Review de Stranger Than Heaven sur Geek Zone : informations, histoire, mon ressenti et captures d'écran.",
    },
  },
  {
    path: '/lets_play_reanimal',
    name: 'LetsPlayReanimal',
    component: LetsPlayReanimal,
    meta: {
      menu: 'letsplay',
      title: 'REANIMAL',
      description: "Let's Play de REANIMAL sur Geek Zone : informations, vidéo, mon ressenti et captures d'écran.",
    },
  },
  {
    path: '/lets_play_a_highland_song',
    name: 'LetsPlayAHighlandSong',
    component: LetsPlayAHighlandSong,
    meta: {
      menu: 'letsplay',
      title: 'A Highland Song',
      description: "Let's Play de A Highland Song sur Geek Zone : informations, vidéo, mon ressenti et captures d'écran.",
    },
  },
  {
    path: '/lets_play_a_short_hike',
    name: 'LetsPlayAShortHike',
    component: LetsPlayAShortHike,
    meta: {
      menu: 'letsplay',
      title: 'A Short Hike',
      description: "Let's Play de A Short Hike sur Geek Zone : informations, vidéo, mon ressenti et captures d'écran.",
    },
  },
  {
    path: '/passion_pixel',
    name: 'PassionPixel',
    component: PassionPixel,
    meta: {
      menu: 'base',
      title: 'Passion Pixel',
      description: 'Passion Pixel, le podcast de Geek Zone où des invités parlent de leur jeu de cœur.',
    },
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: Impressum,
    meta: {
      menu: 'base',
      title: 'Impressum',
      description: 'Mentions légales et coordonnées du site Geek Zone.',
    },
  },
  {
    path: '/condition_dutilisation',
    name: 'ConditionDutilisation',
    component: ConditionDutilisation,
    meta: {
      menu: 'base',
      title: "Conditions d'utilisation",
      description: "Conditions d'utilisation du site Geek Zone.",
    },
  },
  {
    path: '/protection_des_donnees',
    name: 'ProtectionDesDonnees',
    component: ProtectionDesDonnees,
    meta: {
      menu: 'base',
      title: 'Protection des données',
      description: 'Politique de protection des données du site Geek Zone.',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

// --- Titre de l'onglet et description de la page ---
// Format : "<Titre de la page> – Geek Zone". Pour inverser l'ordre, modifie formatTitle().
const SITE_NAME = 'Geek Zone';
const HOME_TITLE = "Geek Zone – Reviews de jeux vidéo, Let's Play et podcast";

export function formatTitle(pageTitle) {
  return `${pageTitle} – ${SITE_NAME}`;
}

export function applyPageMeta(route) {
  if (typeof document === 'undefined') return;
  const { title, description } = route.meta || {};

  document.title = route.path === '/' || !title ? HOME_TITLE : formatTitle(title);

  if (description) {
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', 'description');
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', description);
  }
}

router.afterEach((to) => {
  applyPageMeta(to);
});

export default router;
