/**
 * 不污染Date及prototype对象为原则
 * @type {{add: module.exports.add}}
 */
module.exports = {
    /**
     * 是否是日期类型
     * @param obj
     * @returns {boolean}
     */
    isDate: function (obj) {
        return Object.prototype.toString(obj) == '[object Date]';
    },

    /**
     * 将字符串解析为日期对象
     * @param str
     * @returns {Date}
     */
    parse: function (str) {
        return new Date(str);
    },

    /**
     * 获取该日期所在月份的第一天
     * @param date
     * @returns {*}
     */
    getFirstDayOfDate: function (date) {
        var cloned = this.clone(date);
        cloned.setDate(1);
        return cloned;
    },

    /**
     * 清除时分秒和毫秒
     * @param date
     */
    clearTime: function (date) {
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
    },

    /**
     * 克隆日期对象
     * @param date
     * @returns {Date}
     */
    clone: function (date) {
        return new Date(date.getTime());
    },

    /**
     * 增加(减少)天数
     * @param date
     * @param num
     * @returns {*}
     */
    addDays: function (date, num) {
        date.setDate(date.getDate() + num);
        return date;
    },

    /**
     * 比较两个日期,如果第一个大于第二个则返回1, 小于则返回-1, 相等则返回0
     * @param date1
     * @param date2
     * @returns {number}
     */
    compare: function (date1, date2) {
        if(date1.valueOf() < date2.valueOf()){
            return -1;
        }else if(date1.valueOf() > date2.valueOf()){
            return 1;
        }
        return 0;
    },

};