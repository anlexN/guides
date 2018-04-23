import zh from "./public/javascripts/locales/zh/homepage/index.js";
import en from "./public/javascripts/locales/en/homepage/index.js";
import fr from "./public/javascripts/locales/fr/homepage/index.js";
import it from "./public/javascripts/locales/it/homepage/index.js";
import ja from "./public/javascripts/locales/ja/homepage/index.js";
import ko from "./public/javascripts/locales/ko/homepage/index.js";
import ru from "./public/javascripts/locales/ru/homepage/index.js";
import uk from "./public/javascripts/locales/uk/homepage/index.js";

import locales from "./public/javascripts/locales/index.js";

// const locale = [zh, en, fr, it, ja, ko, ru, uk];
const selectLocales = document.querySelector("select[name='locales']");
const option = window.localStorage.getItem("locale") || window.navigator.language.split("-")[0];

selectLocales.namedItem(option).setAttribute("selected", true);

locales(undefined, zh, en, fr, it, ja, ko, ru, uk);

selectLocales.addEventListener("change", (event) => locales(event, zh, en, fr, it, ja, ko, ru, uk));

document.addEventListener("languagechange", (event) => locales(event, zh, en, fr, it, ja, ko, ru, uk));