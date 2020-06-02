/**
* @param isoDate {string} in ISO 8601 format e.g. 2015-12-31
* @param numberMonths {number} e.g. 1, 2, 3...
* @returns {string} in ISO 8601 format e.g. 2015-12-31
*/
function addMonths (isoDate, numberMonths) {
    var dateObject = new Date(isoDate),
        day = dateObject.getDate(); // returns day of the month number

    // avoid date calculation errors
    dateObject.setHours(20);

    // add months and set date to last day of the correct month
    dateObject.setMonth(dateObject.getMonth() + numberMonths + 1, 0);

    // set day number to min of either the original one or last day of month
    dateObject.setDate(Math.min(day, dateObject.getDate()));

    return dateObject.toISOString().split('T')[0];
};
