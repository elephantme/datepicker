
var commonUtils = require('./common.utils');
var dateUtils = require('./date.utils');

function bindEvent() {

}

function unbindEvent() {

}

function getCalendarList(startTime, endTime) {

}

function getCalendarOfMonth(month){
    var weeks = [],
        firstDay = dateUtils.getFirstDayOfDate(month), //该月的第一天
        firstWeekDay = firstDay.getDay(), //该月的一个星期
        daysOfMonth = Date.getDaysInMonth(month.getFullYear(), month.getMonth()), //该月有几天
        rowNums = Math.ceil((firstWeekDay + daysOfMonth) / 7), //该月日历的行数
        curDate = firstDay.clone().addDays(-firstWeekDay); //循环遍历的日期

    for (var i = 0; i < rowNums; i++) {
        var days = [];
        for (var j = 0; j < 7; j++) {
            var tmp = curDate.clone();
            days.push({
                day: tmp,
                disable: tmp.isAfter(scope.option.max) || tmp.isBefore(scope.option.min),
                other: tmp.getMonth() != month.getMonth(),
                today: Date.isSameDay(tmp, today)
            });
            curDate = curDate.addDays(1);
        }
        weeks.push(days);
    }

    return {
        month: month,
        weeks: weeks
    };
}

/**
 * 基于模板进行渲染
 * 1. 数据准备
 * 2. 绑定事件
 *
 * 1. 先把日期渲染出来
 * 2. 事件处理
 * 3. 日期范围选择功能
 * 4. 月份翻页
 * 5. 事件回调
 * 6. 日期最大值及最小值设置
 * 7. 已选日期展示
 * 8. 已选日期输入框change事件的处理
 * 9. 对个日期面板展示
 * 10. 单选日期
 * 11. 日期格式化及日期操作函数的封装
 * @param options
 * @returns {{render: render}}
 */
function datePicker(options){
    var defaults = {

    };
    // 配置
    var configs =  commonUtils.extend(defaults, options);

    var calendars = getCalendarList(configs.startTime, configs.endTime);

    return {
        render: function(){

        }
    };
}

module.exports = datePicker;
