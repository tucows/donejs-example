import QUnit from 'steal-qunit';
import { ViewModel } from './es2015-promise';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.should();
chai.use(chaiAsPromised);

describe("messege getter", function() {
	const vm = new ViewModel();
	it('should return an async message', function() {
		return vm.message.should.eventually.equal("The simple ajax call returned this.");
	})
});
