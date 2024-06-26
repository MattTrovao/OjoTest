import './sass/app.scss'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(FontAwesomeIcon, FontAwesomeIcon);
library.add(fas);
app.component("font-awesome-icon", FontAwesomeIcon);

import Page from "@/components/Elements/Page.vue";
import Container from "@/components/Elements/Container.vue";
import SectionTitle from "@/components/Elements/SectionTitle.vue";

import Header from "@/components/Header/Header.vue";

import MoviesCard from "@/components/Movies/MoviesCard.vue";
import MoviesSkeleton from "@/components/Movies/MoviesSkeleton.vue";

import CharactersCard from "@/components/Characters/CharactersCard.vue";
import CharactersSkeleton from "@/components/Characters/CharactersSkeleton.vue";

import PlanetsCard from "@/components/Planets/PlanetsCard.vue";
import PlanetsSkeleton from "@/components/Planets/PlanetsSkeleton.vue";

app.component("Page", Page);
app.component("Container", Container);
app.component("SectionTitle", SectionTitle);

app.component("Header", Header);

app.component("MoviesCard", MoviesCard);
app.component("MoviesSkeleton", MoviesSkeleton);

app.component("CharactersCard", CharactersCard);
app.component("CharactersSkeleton", CharactersSkeleton);

app.component("PlanetsCard", PlanetsCard);
app.component("PlanetsSkeleton", PlanetsSkeleton);


app.mount("#app");
