const localesTexts = document.querySelectorAll("[l10n]");
let locale;

export default function locales(event, zh, en, fr, it, ja, ko, ru, uk) {
    event ? locale = event.target.value : locale = window.localStorage.getItem("locale") || window.navigator.language.split("-")[0];

    if (locale === "zh") {
        localesTexts.forEach(localesText => {
            localesText.firstChild.nodeValue = zh[localesText.getAttribute("l10n")];
        });

    }
    else if (locale === "en") {
        localesTexts.forEach(localesText => {
            localesText.firstChild.nodeValue = en[localesText.getAttribute("l10n")];
        });

    } else if (locale === "fr") {
        localesTexts.forEach(localesText => {
            localesText.firstChild.nodeValue = fr[localesText.getAttribute("l10n")];
        });

    } else if (locale === "it") {
        localesTexts.forEach(localesText => {
            localesText.firstChild.nodeValue = it[localesText.getAttribute("l10n")];
        });

    } else if (locale === "ja") {
        localesTexts.forEach(localesText => {
            localesText.firstChild.nodeValue = ja[localesText.getAttribute("l10n")];
        });

    } else if (locale === "ko") {
        localesTexts.forEach(localesText => {
            localesText.firstChild.nodeValue = ko[localesText.getAttribute("l10n")];
        });

    } else if (locale === "ru") {
        localesTexts.forEach(localesText => {
            localesText.firstChild.nodeValue = ru[localesText.getAttribute("l10n")];
        });

    } else if (locale === "uk") {
        localesTexts.forEach(localesText => {
            localesText.firstChild.nodeValue = uk[localesText.getAttribute("l10n")];
        });

    }

    window.localStorage.setItem("locale", locale);

};