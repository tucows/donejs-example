import 'steal-mocha';
import ma2, { ViewModel } from './modify-ajax2';
 
debugger;

/*
 * Normally we would setup setup a Fixture for testing an API call
 * However, since this entire project is a mock project, this fixture is already
 * setup in the component
import Fixture from 'can/util/fixture/';
 
Fixture("GET /api/modify-ajax2", function() {
  return {
    myArray: [1,2,3,4,5]
  }
});
 **/

describe('donejs-example/modify-ajax2', function(){
	it('ViewModel initializes myArray', function(){
		var vm = new ViewModel();
		return vm.attr("myArray").should.have.lengthOf(0);
	});
	it('getArray should get array and modify it', function(done) {
		
	});
});

