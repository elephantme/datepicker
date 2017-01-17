var calendar = require('../src/calendar');

describe('calendar.utils', function () {
    var calendarData = null, currentDate = null;

    beforeEach(function(){
        currentDate = new Date('2017-01-12');
        calendarData = calendar.getCalendarOfMonth(currentDate);
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

    describe('renderCalendarBody', function () {
        it('should have 6 rows', function () {
            var tbody = calendar.renderCalendarBody(calendarData.weeks);
            expect(tbody.children.length).to.be.equal(6);
        });

        it('should have 7 column', function () {
            var tbody = calendar.renderCalendarBody(calendarData.weeks);
            var row = tbody.children[0];
            expect(row.children.length).to.be.equal(7);
        });

        it('five row, six column content is 11', function () {
            var tbody = calendar.renderCalendarBody(calendarData.weeks);
            var row = tbody.children[5],
                column = row.children[6],
                text = column.innerText;
            expect(text).to.be.equal('11');
        });

    })
});