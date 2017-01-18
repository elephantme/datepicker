var dateUtils = require('./date.utils');

var ROW_NUM = 6,
    COL_NUM = 7,
    TABLE = 'table',
    THEAD = 'thead',
    TBODY = 'tbody',
    TH = 'th',
    TR = 'tr',
    TD = 'td',
    A = 'a',
    DIV = 'div',
    CLASS_NAME_SPACE = 'pt-datepicker',
    TABLE_CONTAINER_CLASS = 'content',
    doc = document;

var weekends = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function getTHead(weekends){
    var thead = doc.createElement(THEAD);
    return weekends.reduce(function (head, w) {
        var text = doc.createTextNode(w);
        var th = doc.createElement(TH);
        th.appendChild(text);
        head.appendChild(th);
        return head;
    }, thead);
}

function getTBody(weeks){
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

    renderCalendarTable: function (weeks) {
        var thead = getTHead(weekends),
            tbody = getTBody(weeks),
            table = doc.createElement(TABLE);
        table.appendChild(thead);
        table.appendChild(tbody);
        return table;
    },

    renderCalendar: function (date) {
        var container = doc.createElement(DIV),
            tableContainer = doc.createElement(DIV),
            calendar = this.getCalendarOfMonth(date),
            table = this.renderCalendarTable(calendar.weeks);

        container.setAttribute('class', CLASS_NAME_SPACE);
        tableContainer.setAttribute('class', TABLE_CONTAINER_CLASS);
        tableContainer.appendChild(table);
        container.appendChild(tableContainer);

        return container;
    }
};