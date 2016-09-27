import 'steal-mocha';
import { ViewModel } from './modify-ajax';


describe('donejs-example/modify-ajax', function(){
	it('should return a modified ajax response', function(done){
		var vm = new ViewModel();
		return vm.attr('stuff').then(
			function(response) {
				response.message.should.equal("The simple ajax call returned this. And it was modified to have this.");
				done();
			}, done)
	});
});

