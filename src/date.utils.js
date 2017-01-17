/**
 * 不污染Date及prototype对象为原则
 * @type {{add: module.exports.add}}
 */
module.exports = {
    isDate: function (obj) {
        return Object.prototype.toString(obj) == '[object Date]';
    },
    parse: function (str) {
        return new Date(str);
    },
    today: function () {

    },
    getFirstDayOfDate: function (date) {
        var cloned = this.clone(date);
        cloned.setDate(1);
        return cloned;
    },
    clone: function (date) {
        return new Date(date.getTime());
    },
    add: function () {

    },
    addDays: function (date, num) {
        date.setDate(date.getDate() + num);
        return date;
    },
    compare: function () {

    },

};