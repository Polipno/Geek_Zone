import { createRouter, createWebHashHistory } from "vue-router";

import Index from "./components/IndexComponent.vue";
import Contact from "./components/ContactComponent.vue";
import ReviewComponent from "./components/ReviewComponent.vue";
import LetsPlay from "./components/LetsPlayComponent.vue";
import Wishlist from "./components/WishlistComponent.vue";
import Question from "./components/QuestionComponent.vue";
import Podcast from "./components/PodcastComponent.vue";
import AnotherCodeRecollection from "./components/Game_Review/AnotherCodeRecollectionComponent.vue";
import MarioVsDonkeyKong from "./components/Game_Review/MarioVsDonkeyKongComponent.vue";
import PrincessPeachShowtime from "./components/Game_Review/Princess_Peach_Showtime.vue";
import PaperMarioLaPorteMillenaire from "./components/Game_Review/PaperMarioLaPorteMillenaireComponent.vue";
import LuigisMansion2HD from "./components/Game_Review/LuigisMansion2HDComponent.vue";
import ZeldaEchoesOfWisdom from "./components/Game_Review/ZeldaEchoesOfWisdomComponent.vue";
import MarioPartyJamboree from "./components/Game_Review/MarioPartyJamboreeComponent.vue";
import MarioLuigiLepopeeFraternelle from "./components/Game_Review/MarioLuigiLepopeeFraternelleComponent.vue";
import DonkeyKongCountryReturnsHD from "./components/Game_Review/DonkeyKongCountryReturnsHDComponent.vue";
import MarioKartWorld from "./components/Game_Review/MarioKartWorldComponent.vue";
import DonkeyKongBananza from "./components/Game_Review/DonkeyKongBananzaComponent.vue";
import SuperMarioGalaxySuperMarioGalaxy2 from "./components/Game_Review/SuperMarioGalaxy+SuperMarioGalaxy2Component"
import KirbyAirRaiders from "./components/Game_Review/KirbyAirRaidersComponent.vue";
import SplitFiction from "./components/Game_Review/SplitFictionComponent.vue";
import LetsPlayInside from "./components/Lets_Play/Lets_Play_Inside.vue";
import LetsPlayGris from "./components/Lets_Play/Lets_Play_Gris.vue";
import PassionPixel from "./components/Podcast/PassionPixelComponent.vue";
import Impressum from "./components/ImpressumComponent.vue";
import ConditionDutilisation from "./components/ConditionDutilisationComponent.vue";
import ProtectionDesDonnées from "./components/ProtectionDesDonnéesComponent.vue";

const routes = [
  { path: "/", name: "Index", component: Index, meta: { menu: "base" } },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: { menu: "base" },
  },
  {
    path: "/review",
    name: "Review",
    component: ReviewComponent,
    meta: { menu: "base" },
  },
  {
    path: "/letsplay",
    name: "LetsPlay",
    component: LetsPlay,
    meta: { menu: "base" },
  },
  {
    path: "/wishlist",
    name: "Wishlist",
    component: Wishlist,
    meta: { menu: "base" },
  },
  {
    path: "/question",
    name: "Question",
    component: Question,
    meta: { menu: "base" },
  },
  {
    path: "/podcast",
    name: "Podcast",
    component: Podcast,
    meta: { menu: "base" },
  },
  {
    path: "/another_code_recollection",
    name: "AnotherCodeRecollection",
    component: AnotherCodeRecollection,
    meta: { menu: "game" },
  },
  {
    path: "/mario_vs._donkey_kong",
    name: "MarioVs.DonkeyKong",
    component: MarioVsDonkeyKong,
    meta: { menu: "game" },
  },
  {
    path: "/princess_peach_showtime",
    name: PrincessPeachShowtime,
    component: PrincessPeachShowtime,
    meta: { menu: "game" },
  },
  {
    path: "/paper_mario_la_porte_millenaire",
    name: "PaperMarioLaPorteMillenaire",
    component: PaperMarioLaPorteMillenaire,
    meta: { menu: "game" },
  },
  {
    path: "/luigis_mansion_2_hd",
    name: "LuigisMansion2HD",
    component: LuigisMansion2HD,
    meta: { menu: "game" },
  },
  {
    path: "/zelda_echoes_of_wisdom",
    name: "ZeldaEchoesOfWisdom",
    component: ZeldaEchoesOfWisdom,
    meta: { menu: "game" },
  },
  {
    path: "/mario_party_jamboree",
    name: "MarioPartyJamboree",
    component: MarioPartyJamboree,
    meta: { menu: "game" },
  },
  {
    path: "/mario_and_luigi_lepopee_fraternelle",
    name: "MarioAndLuigiLepoppeFraternelle",
    component: MarioLuigiLepopeeFraternelle,
    meta: { menu: "game" },
  },
  {
    path: "/donkey_kong_returns_hd",
    name: "DonkeyKongReturnsHD",
    component: DonkeyKongCountryReturnsHD,
    meta: { menu: "game" },
  },
  {
    path: "/mario_kart_world",
    name: "MarioKartWorld",
    component: MarioKartWorld,
    meta: { menu: "game" },
  },
  {
    path: "/donkey_kong_bananza",
    name: "DonkeyKongBananza",
    component: DonkeyKongBananza,
    meta: { menu: "game" },
  }, 
  {
    path: "/super_mario_galaxy_+_super_mario_galaxy_2",
    name: "SuperMarioGalaxy+SuperMarioGalaxy2",
    component: SuperMarioGalaxySuperMarioGalaxy2,
    meta: { menu: "game" },
  }, 
  {
    path: "/kirby_air_raiders",
    name: "KirbyAirRaiders",
    component: KirbyAirRaiders,
    meta: { menu: "game" },
  },
    {
    path: "/split_fiction",
    name: "SplitFiction",
    component: SplitFiction,
    meta: { menu: "game" },
  },
  {
    path: "/lets_play_inside",
    name: "LetsPlayInside",
    component: LetsPlayInside,
    meta: { menu: "letsplay" },
  },
  {
    path: "/lets_play_gris",
    name: "LetsPlayGris",
    component: LetsPlayGris,
    meta: { menu: "letsplay" },
  },
  {
    path: "/passion_pixel",
    name: "PassionPixel",
    component: PassionPixel,
    meta: { menu: "base" },
  },
  {
    path: "/impressum",
    name: "Impressum",
    component: Impressum,
    meta: { menu: "base" },
  },
  {
    path: "/condition_d'utilisation",
    name: "ConditionDutilisation",
    component: ConditionDutilisation,
    meta: { menu: "base" },
  },
  {
    path: "/protection_des_données",
    name: "ProtectionDesDonnées",
    component: ProtectionDesDonnées,
    meta: { menu: "base" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth", 
      };
    } else if (savedPosition) {
      return savedPosition; 
    } else {
      return { top: 0 };
    }
  },
});

export default router;
