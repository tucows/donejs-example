import { ViewModel } from './simple-ajax';



/*
 * Normally we would setup setup a Fixture for testing an API call
 * However, since this entire project is a mock project, this fixture is already
 * setup in the component
import Fixture from 'can/util/fixture/';
 
Fixture("GET /api/simple-ajax", function() {
  return {
    message: "The simple ajax call returned this."
  }
});

 **/

describe('donejs-example/simple-ajax component', function(){
	it('should return ajax response', function(done){
		var vm = new ViewModel();
		// return vm.attr('stuff').should.eventually.equal("The simple ajax call returned this.");
		return vm.attr('stuff').then(
			function(response) {
				response.message.should.equal("The simple ajax call returned this.");
				done();
			}, done)
	});
});

