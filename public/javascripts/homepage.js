const zh = {
    "Convention": "规范",
    "Donate": "赞助",
    "Guides": "指南",
    "Created reason": "创建原因",
    "the world": "世界是有组织，有意义，优雅的",
    "summarize": "总结我的经验"
}

const en = {
    "Convention": "Convention",
    "Donate": "Donate",
    "Guides": "Guides",
    "Created reason": "Created reason",
    "the world": "the world is organized, meaningful, elegant!",
    "summarize": "summarize my experience"
}

const fr = {
    "Convention":"Convention",
    "Donate":"Faire un don",
    "Guides":"Guides",
    "Created reason":"Raison créée",
    "the world":"le monde est organisé, significatif, élégant!",
    "summarize":"résumer mon expérience"
}

const it = {
    "Convention": "Convenzione",
    "Donate": "Donare",
    "Guides": "Guide",
    "Created reason": "Ragione creata",
    "the world": "il mondo è organizzato, significativo, elegante!",
    "summarize": "riassumere la mia esperienza"
}

const ja = {
    "Convention": "コンベンション",
    "Donate": "寄付する",
    "Guides": "ガイド",
    "Created reason": "作成された理由",
    "the world": "世界は組織され、有意義でエレガントです！",
    "summarize": "私の経験を要約する"
}

const ko = {
    "Convention": "협약",
    "Donate": "기부",
    "Guides": "가이드",
    "Created reason": "창조 된 이유",
    "the world": "세상은 체계적이고 의미 있고 우아한 세상입니다!",
    "summarize": "내 경험을 요약하다."
}

const ru = {
    "Convention":"условность",
    "Donate":"жертвовать",
    "Guides":"руководства",
    "Created reason":"Созданная причина",
    "the world":"мир организован, значим, изящен!",
    "summarize":"обобщаю мой опыт"
}

const uk = {
    "Convention": "Конвенція",
    "Donate": "Пожертвувати",
    "Guides": "Довідники",
    "Created reason": "Створено причину",
    "the world": "світ організований, змістовний, елегантний!",
    "summarize": "підбиваю підсумок мій досвід"
}

const localesTexts = document.querySelectorAll("[l10n]");
let locale;

function locales(event, zh, en, fr, it, ja, ko, ru, uk) {
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

}

// const locale = [zh, en, fr, it, ja, ko, ru, uk];
const selectLocales = document.querySelector("select[name='locales']");
const option = window.localStorage.getItem("locale") || window.navigator.language.split("-")[0];

selectLocales.namedItem(option).setAttribute("selected", true);

locales(undefined, zh, en, fr, it, ja, ko, ru, uk);

selectLocales.addEventListener("change", (event) => locales(event, zh, en, fr, it, ja, ko, ru, uk));

document.addEventListener("languagechange", (event) => locales(event, zh, en, fr, it, ja, ko, ru, uk));

if ("serviceWorker" in navigator) {
    navigator
        .serviceWorker
        .register("service-worker.js")
        .then(registration => console.log("ServiceWorker registration successful with scope: ", registration))
        .catch(error => console.log("ServiceWorker registration failed: ", wrror));
}
