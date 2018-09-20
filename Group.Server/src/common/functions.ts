const moment = require('moment');

/**
 * Récupère la date et l'heure du moment présent
 */
export let getDateTimeNow = function () {
    return moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
}

/**
 * Récupère les milisecondes du moment présent
 */
export let getNow = function () {
    return moment();
}

/**
 *  Récupère une série de caractère random
 */
export let getRandomString = function () {
    let str: string = "";

    for (var i = 0; i < 16; i++) {
        str += (Math.floor(Math.random() * Math.floor(20)));
    }

    return str;
}

/**
 * Récupère l'extension d'un fichier
 * @param fileName 
 */
export let getExtension = function (fileName: string) {
    let tab: string[];

    if (fileName != undefined) {
        tab = fileName.split(".");
        return tab[tab.length - 1];
    }

    return "png";
}