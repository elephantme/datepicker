var dateUtils = require('../src/date.utils');

describe('date.utils', function(){

	describe('add', function(){
		it('add a positive number', function(){
			var currentDate = new Date('2017-01-01');
			var result = dateUtils.addDays(currentDate, 32);
			expect(result.getDate()).to.be.equal(2);
            expect(result.getMonth()).to.be.equal(1);
		});

        it('add a negative number', function(){
            var currentDate = new Date('2017-01-01');
            var result = dateUtils.addDays(currentDate, -1);
            expect(result.getDate()).to.be.equal(31);
            expect(result.getMonth()).to.be.equal(11);
        });
	});

    describe('clone', function () {
        it('cloned data should not be equal raw date', function () {
            var currentDate = new Date('2017-01-02');
            var result = dateUtils.clone(currentDate);
            expect(result).to.not.equal(currentDate);
        });

        it('between cloned data and raw date should have the same day, month and year', function () {
            var currentDate = new Date('2017-01-02');
            var result = dateUtils.clone(currentDate);
            expect(result.getDate()).to.be.equal(currentDate.getDate());
            expect(result.getMonth()).to.be.equal(currentDate.getMonth());
            expect(result.getFullYear()).to.be.equal(currentDate.getFullYear());
        });
    });

    describe('getFirstDayOfDate', function () {
       it('first day should be 1', function () {
           var currentDate = new Date('2017-01-12');
           var result = dateUtils.getFirstDayOfDate(currentDate);
           expect(result.getDate()).to.be.equal(1);
       })
    });
});