var commonUtils = require('./common.utils');
var dateUtils = require('./date.utils');
var calendar = require('./calendar');
var gator = require('./gator');

function getDefaultConfig() {
    return {};
}

function bindEvents(el) {
    var gatorInst = gator(el);
    gatorInst.on('click', 'td>a', function (e) {
        alert('click')
    });
}

function unbindEvents(el) {
    var gatorInst = gator(el);
    gatorInst.off();
}

/**
 * 1. 先把日期渲染出来 done
 * 2. 事件处理 done
 * 3. 日期范围选择功能
 * 4. 月份翻页
 * 5. 事件回调
 * 6. 日期最大值及最小值设置
 * 7. 已选日期展示
 * 8. 已选日期输入框change事件的处理
 * 9. 单个日期面板展示
 * 10. 单选日期
 * 11. 日期格式化及日期操作函数的封装
 * @param options
 * @returns {{render: render}}
 */
function datePicker(options) {
    bindEvents(options.el);
    this.configs = commonUtils.extend(getDefaultConfig(), options);
    this.el = this.configs.el;
}

datePicker.prototype.render = function (date) {
    date = date || this.configs.startTime;
    var startDate = dateUtils.parse(date);
    var calendarElement = calendar.renderCalendar(startDate, dateUtils.parse(this.configs.endTime));
    this.el.appendChild(calendarElement);
};

datePicker.prototype.destroy = function () {
    unbindEvents(this.el);
    this.el = null;
    this.configs = null;
};

module.exports = datePicker;
