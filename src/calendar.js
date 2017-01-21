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
    DISABLE_CLASS = 'disable ',
    SELECTED_CLASS = 'selected ',
    FIRST_SELECTED_CLASS = 'first ',
    LAST_SELECTED_CLASS = 'last ',
    doc = document;

var weekends = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function getTHead(weekends) {
    var thead = doc.createElement(THEAD);
    return weekends.reduce(function (head, w) {
        var text = doc.createTextNode(w);
        var th = doc.createElement(TH);
        th.appendChild(text);
        head.appendChild(th);
        return head;
    }, thead);
}

function getTBody(weeks, fn) {
    var tbody = doc.createElement(TBODY);
    weeks.forEach(function (rows) {
        var tr = doc.createElement(TR);
        rows.forEach(function (col) {
            var td = doc.createElement(TD),
                a = doc.createElement(A),
                text = doc.createTextNode(col.getDate());
            //设置样式
            var clsNames = fn.call(null, col);
            a.setAttribute('class', clsNames);
            //apend 操作
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

    renderCalendarTable: function (weeks, fn) {
        var thead = getTHead(weekends),
            tbody = getTBody(weeks, fn),
            table = doc.createElement(TABLE);
        table.appendChild(thead);
        table.appendChild(tbody);
        return table;
    },

    renderCalendar: function (startDate, endDate) {
        var container = doc.createElement(DIV),
            tableContainer = doc.createElement(DIV),
            calendar = this.getCalendarOfMonth(startDate),
            table = this.renderCalendarTable(calendar.weeks, function (currentDate) {
                var currentDay = currentDate.getDate(),
                    startDay = startDate.getDate(),
                    endDay = endDate.getDate();

                // 当前日期不属于该月份则返回disable
                if (currentDate.getMonth() != startDate.getMonth()) return DISABLE_CLASS;

                // 当前日期大于今日则返回disable
                if (currentDay > new Date().getDate()) return DISABLE_CLASS;

                // 范围内
                if (currentDay >= startDay && currentDay <= endDay) {
                    var selectedCls = SELECTED_CLASS;
                    if (currentDay == startDay) selectedCls += FIRST_SELECTED_CLASS;
                    if (currentDay == endDay) selectedCls += LAST_SELECTED_CLASS;
                    return selectedCls;
                }

                return '';
            });

        container.setAttribute('class', CLASS_NAME_SPACE);
        tableContainer.setAttribute('class', TABLE_CONTAINER_CLASS);
        tableContainer.appendChild(table);
        container.appendChild(tableContainer);

        return container;
    },

    getClassNames: function (currentDate, displayDate, configs) {
        var result = [];

        // 不是同一个月份
        if (currentDate.getMonth() != displayDate.getMonth()) {
            result.push(DISABLE_CLASS);
            return result;
        }

        // 大于今日的日期
        var today = dateUtils.clearTime(new Date());
        if (dateUtils.compare(today, currentDate) > 0) {
            result.push(DISABLE_CLASS);
            return result;
        }

        var startDate = dateUtils.clearTime(configs.startDate),
            endDate = dateUtils.clearTime(configs.endDate);

        // 在开始和结束时间范围内
        if (dateUtils.compare(currentDate, startDate) >= 0 &&
            dateUtils.compare(currentDate, endDate) <= 0) {
            result.push(SELECTED_CLASS);
        }

        // 开始
        if (dateUtils.compare(currentDate, startDate) == 0) {
            result.push(FIRST_SELECTED_CLASS);
        }

        // 结束
        if (dateUtils.compare(currentDate, endDate)) {
            result.push(LAST_SELECTED_CLASS);
        }

        return result;
    }
};