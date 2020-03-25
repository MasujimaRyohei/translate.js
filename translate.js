// File name : translate.js
// Version   : 1.1.0
// Author    : Masujima Ryohei
// Date      : 2018/04/11 Latest update 2020/03/24
// Summary   : For translating language.

// language code.
var langs = {
    af: "data-af", ax: "data-ax", al: "data-al", dz: "data-dz", as: "data-as", ad: "data-ad", ao: "data-ai", ai: "data-ai",
    aq: "data-aq", ag: "data-ag", ar: "data-ar", am: "data-am", aw: "data-aw", au: "data-au", at: "data-at", az: "data-az",
    bs: "data-bs", bh: "data-bh", bd: "data-bd", bb: "data-bb", by: "data-by", be: "data-be", bz: "data-bz", bj: "data-bj",
    bm: "data-bm", bt: "data-bt", bo: "data-bo", bq: "data-bq", ba: "data-ba", bw: "data-bw", bv: "data-bv", br: "data-br",
    io: "data-io", bn: "data-bn", bg: "data-bg", bf: "data-bf", bi: "data-bi", cv: "data-cv", kh: "data-kh", cm: "data-cm",
    ca: "data-ca", ky: "data-ky", cf: "data-cf", td: "data-td", cl: "data-cl", cn: "data-cn", cx: "data-cx", cc: "data-cc",
    co: "data-co", km: "data-km", cg: "data-cg", cd: "data-cd", ck: "data-ck", cr: "data-cr", ci: "data-ci", hr: "data-hr",
    cu: "data-cu", cw: "data-cw", cy: "data-cy", cz: "data-cz", dk: "data-dk", dj: "data-dj", dm: "data-dm", do: "data-do",
    ec: "data-ec", eg: "data-eg", sv: "data-sv", gq: "data-gq", er: "data-er", ee: "data-ee", sz: "data-sz", et: "data-et",
    fk: "data-fk", fo: "data-fo", fj: "data-fj", fi: "data-fi", fr: "data-fr", gf: "data-gf", pf: "data-pf", tf: "data-tf",
    ga: "data-ga", gm: "data-gm", ge: "data-ge", de: "data-de", gh: "data-gh", gi: "data-gi", gr: "data-gr", gl: "data-gl",
    gd: "data-gd", gp: "data-gp", gu: "data-gu", gt: "data-gt", gg: "data-gg", gn: "data-gn", gw: "data-gw", gy: "data-gy",
    ht: "data-ht", hm: "data-hm", va: "data-va", hn: "data-hn", hk: "data-hk", hu: "data-hu", is: "data-is", in: "data-in",
    id: "data-id", ir: "data-ir", iq: "data-iq", ie: "data-ie", im: "data-im", il: "data-il", it: "data-it", jm: "data-jm",
    jp: "data-jp", je: "data-je", jo: "data-jo", kz: "data-kz", ke: "data-ke", ki: "data-ki", kp: "data-kp", kr: "data-kr",
    kw: "data-kw", kg: "data-kg", la: "data-la", lv: "data-lv", lb: "data-lb", ls: "data-ls", lr: "data-lr", ly: "data-ly",
    li: "data-li", lt: "data-lt", lu: "data-lu", mo: "data-mo", mg: "data-mg", mw: "data-mw", my: "data-my", mv: "data-mv",
    ml: "data-ml", mt: "data-mt", mh: "data-mh", mq: "data-nq", mr: "data-mr", mu: "data-mu", yt: "data-yt", mx: "data-mx",
    en: "data-en",
}

var switchableElements;
// Default language.(IF YOU WANT to need to change default language, change here.)
var defaultLanguage = langs.jp;

document.addEventListener('DOMContentLoaded', function () {

    // Get all switchable elements.
    getAllSwitchableElements();
    // Set default language.
    switchLanguageTo(defaultLanguage);
}, false);

// Switch language to Japanese.
function switchLanguageToJp() {
    switchLanguageTo(langs.jp);
}

// Switch language to English.
function switchLanguageToEn() {
    switchLanguageTo(langs.en);
}

// Switch language to some language.
function switchLanguageTo(lang) {
    for (let i = 0; i < switchableElements.length; i++)
        if (switchableElements[i].hasAttribute(lang))
            switch (switchableElements[i].tagName) {
                case "IMG":
                case "VIDEO":
                case "AUDIO":
                case "EMBED":
                case "IFRAME":
                    switchableElements[i].src = switchableElements[i].getAttribute(lang);
                    break;
                case "INPUT":
                    switchableElements[i].value = switchableElements[i].getAttribute(lang);

                    break;
                case "BUTTON":
                default:
                    switchableElements[i].innerHTML = switchableElements[i].getAttribute(lang);
                    break;
            }
}

// Get all switchable elements.
// If you add new lang attribute after dom content loaded,
// You call this again.
function getAllSwitchableElements() {
    switchableElements = document.getElementsByClassName('lang');
}
////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// END OF FILE //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////