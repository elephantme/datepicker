var calendarUtils = require('../src/calendar.utils');

describe('calendar.utils', function () {

    describe('getCalendarOfMonth', function () {
        it('should have weeks and month', function () {
            var currentDate = new Date('2017-01-12');
            var result = calendarUtils.getCalendarOfMonth(currentDate);
            var weeks = result.weeks;
            expect(weeks.length).to.be.equal(6);
            expect(weeks[0][0].getDate()).to.be.equal(1);
            expect(weeks[4][6].getDate()).to.be.equal(4);
            expect(weeks[5][6].getDate()).to.be.equal(11);
            expect(result.month).to.be.equal(currentDate);
        });
    });
});