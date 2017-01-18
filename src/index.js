
var commonUtils = require('./common.utils');
var dateUtils = require('./date.utils');
var calendar = require('./calendar');
var gator = require('./gator');

function getCalendarElement(){

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
    this.configs =  commonUtils.extend(defaults, options);
    this.el = this.configs.el;
}

datePicker.prototype.render = function (date) {
    date = date || this.configs.startTime;
    var startDate = dateUtils.parse(date);
    var calendarElement = calendar.renderCalendar(startDate);
    this.el.appendChild(calendarElement);
};

module.exports = datePicker;
