import 'steal-mocha';
import { ViewModel, getArray} from './modify-ajax2';

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
	it('getArray return ajax response', function(done){
		return getArray().then(
			function(response) {
				response.myArray.should.equal([1,2,3,4,5]);
				done();
			}, done)
	});
});

