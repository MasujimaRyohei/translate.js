// File name : translate.js
// Version   : 1.0.1
// Author    : Masujima Ryohei
// Date      : 2018/04/11
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
    switchableElements = document.getElementsByClassName('lang');


    // Set default language.
    for (let i = 0; i < switchableElements.length; i++)
        if (switchableElements[i].hasAttribute(defaultLanguage))
            switchableElements[i].innerHTML = switchableElements[i].getAttribute(defaultLanguage);

}, false);

// Switch language to Japanese.
function switchLanguageToJp() {
    for (let i = 0; i < switchableElements.length; i++)
        if (switchableElements[i].hasAttribute('data-jp'))
            switchableElements[i].innerHTML = switchableElements[i].getAttribute('data-jp');
}

// Switch language to English.
function switchLanguageToEn() {
    for (let i = 0; i < switchableElements.length; i++)
        if (switchableElements[i].hasAttribute('data-en'))
            switchableElements[i].innerHTML = switchableElements[i].getAttribute('data-en');
}

////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// END OF FILE //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////