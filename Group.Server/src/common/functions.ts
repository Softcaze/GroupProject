const moment = require('moment');

/**
 * Récupère la date et l'heure du moment présent
 */
export let getDateTimeNow = function () {
    return moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
}