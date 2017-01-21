var calendar = require('../src/calendar');

describe('calendar.utils', function () {
    var calendarData = null, currentDate = null, endDate = null, table = null;

    beforeEach(function(){
        currentDate = new Date('2017-01-12');
        endDate = new Date('2017-01-19');
        calendarData = calendar.getCalendarOfMonth(currentDate, function(){});
        table = calendar.renderCalendarTable(calendarData.weeks, function(){});
    });

    describe('getCalendarOfMonth', function () {
        it('should have weeks and month', function () {
            var weeks = calendarData.weeks;
            expect(weeks.length).to.be.equal(6);
            expect(weeks[0][0].getDate()).to.be.equal(1);
            expect(weeks[4][6].getDate()).to.be.equal(4);
            expect(weeks[5][6].getDate()).to.be.equal(11);
            expect(calendarData.month).to.be.equal(currentDate);
        });
    });

    describe('renderCalendarTable', function () {
        it('tbody should have 6 rows', function () {
            var tbody = table.querySelector('tbody');
            expect(tbody.children.length).to.be.equal(6);
        });

        it('tbody should have 7 column', function () {
            var tbody = table.querySelector('tbody');
            var row = tbody.children[0];
            expect(row.children.length).to.be.equal(7);
        });

        it('tbody five row, six column content is 11', function () {
            var tbody = table.querySelector('tbody');
            var row = tbody.children[5],
                column = row.children[6],
                text = column.innerText;
            expect(text).to.be.equal('11');
        });

        it('should have thead', function () {
            var thead = table.querySelector('thead');
            expect(thead).to.not.be.null;
        });

        it('thead first text content is Mon', function () {
            var thead = table.querySelector('thead');
            var text = thead.children[0].innerText;
            expect(text).to.be.equal('Mon');
        });
    });

    describe('getClassNames', function () {
        // 1. 时间
    });
});