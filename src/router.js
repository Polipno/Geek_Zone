import { createRouter, createWebHistory } from "vue-router";

import Index from "./components/IndexComponent.vue";
import Contact from "./components/ContactComponent.vue";
import ReviewComponent from "./components/ReviewComponent.vue";
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
    path: "/mario_&_luigi_lepopee_fraternelle",
    name: "Mario&LuigiLepoppeFraternelle",
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
  history: createWebHistory(),
  routes,
});

export default router;
