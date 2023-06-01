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
import MoviesSkeleton from "@/components/Movies/MoviesSkeleton.vue";



app.component("Page", Page);
app.component("Container", Container);
app.component("SectionTitle", SectionTitle);

app.component("Header", Header);
app.component("MoviesSkeleton", MoviesSkeleton);


app.mount("#app");
