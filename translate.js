// File name : translate.js
// Version   : 1.0.1
// Author    : Masujima Ryohei
// Date      : 2018/04/11 Latest update 2020/02/20
// Summary   : For translating language.

// English attribute.
var en = "data-en";
// Japanese attribute.
var jp = "data-jp";

var switchableElements;
// Default language.(IF YOU WANT to need to change default language, change here.)
var defaultLanguage = jp;

document.addEventListener('DOMContentLoaded', function () {

    // Get all switchable elements.
    getAllSwitchableElements();
    // Set default language.
    switchLanguageTo(defaultLanguage);
}, false);

// Switch language to Japanese.
function switchLanguageToJp() {
    switchLanguageTo(jp);
}

// Switch language to English.
function switchLanguageToEn() {
    switchLanguageTo(en);
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