import 'steal-mocha'
import { ViewModel } from './complex-ajax';
import chai from 'chai';

chai.should();

// ViewModel unit tests
describe('donejs-example/complex-ajax', function(){
  it('Has message', function(){
    var vm = new ViewModel();
    vm.attr('message').should.equal('This is the complex-ajax component');
  });
});
