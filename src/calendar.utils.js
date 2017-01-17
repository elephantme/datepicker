var dateUtils = require('./date.utils');

var ROW_NUM = 6,
    COL_NUM = 7;

module.exports = {
    getCalendarOfMonth: function (date) {
        var weeks = [],
            firstDayDate = dateUtils.getFirstDayOfDate(date), //该月的第一天
            firstWeekDayNum = firstDayDate.getDay(), //该月的一个星期
            curDate = dateUtils.addDays(dateUtils.clone(firstDayDate), -firstWeekDayNum); //循环遍历的开始日期

        console.log(firstWeekDayNum, curDate)

        for (var i = 0; i < ROW_NUM; i++) {
            var days = [];
            for (var j = 0; j < COL_NUM; j++) {
                days.push(curDate);
                curDate = dateUtils.addDays(dateUtils.clone(curDate), 1);
            }
            weeks.push(days);
        }

        return {
            month: date,
            weeks: weeks
        };
    }
};