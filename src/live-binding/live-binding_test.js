import 'steal-mocha';
import { ViewModel } from './live-binding';
import chai from 'chai';

chai.should();

// ViewModel unit tests
describe('donejs-example/live-binding', function(){
	it('Has message', function(){
		var vm = new ViewModel();
		vm.attr('message').should.equal('This is the live-binding component');
	});
});
