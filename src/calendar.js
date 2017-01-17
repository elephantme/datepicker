var dateUtils = require('./date.utils');

var ROW_NUM = 6,
    COL_NUM = 7,
    TBODY = 'tbody',
    TR = 'tr',
    TD = 'td',
    A = 'a',
    doc = document;

module.exports = {
    getCalendarOfMonth: function (date) {
        var weeks = [],
            firstDayDate = dateUtils.getFirstDayOfDate(date), //该月的第一天
            firstWeekDayNum = firstDayDate.getDay(), //该月的一个星期
            curDate = dateUtils.addDays(dateUtils.clone(firstDayDate), -firstWeekDayNum); //循环遍历的开始日期

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
    },

    renderCalendarBody: function (weeks) {
        var tbody = doc.createElement(TBODY);
        weeks.forEach(function (rows) {
            var tr = doc.createElement(TR);
            rows.forEach(function (col) {
                var td = doc.createElement(TD),
                    a = doc.createElement(A),
                    text = doc.createTextNode(col.getDate());
                a.appendChild(text);
                td.appendChild(a);
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
        return tbody;
    }
};