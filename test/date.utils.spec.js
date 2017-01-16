var dateUtils = require('../src/date.utils');

describe('date.utils', function(){

	describe('test', function(){
		it('add', function(){
			expect(dateUtils.add(1,2)).to.be.equal(3);
		});
	});
});