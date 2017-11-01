import 'steal-mocha';
import { ViewModel } from './simple-ajax';
import chai from 'chai';
import chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised);
chai.should();


/*
 * Normally we would setup setup a Fixture for testing an API call
 * However, since this entire project is a mock project, this fixture is already
 * setup in the component
import Fixture from 'can/util/fixture/';
 
Fixture("GET /api/simple-ajax", function() {
  return "The simple ajax call returned this.";
});

 **/

describe('donejs-example/simple-ajax component', function(){
	var vm;
	beforeEach((done) => {
		vm = new ViewModel();
		vm.on('message', () => {}); // we can only call done once, but we still need this bound
		vm.on('modMessage', () => done());// bind message so that it's not undefined. done called on the last bind
	});

	it('should return the expected message promise', function(){
		return vm.get('messagePromise').should.eventually.deep.equal({"message": "The simple ajax call returned this."});
	});
	it('should return the expected message', function(){
		return vm.get('message').should.deep.equal({"message": "The simple ajax call returned this."});
	});
	it('should return the expected modified message', function(){
		return vm.get('modMessage').should.equal("The simple ajax call returned this. And we modified the response.");
	});
});

