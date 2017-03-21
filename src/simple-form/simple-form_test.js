import 'steal-mocha'
import { ViewModel } from './simple-form';
import chai from 'chai';

chai.should();

// ViewModel unit tests
describe('donejs-example/simple-form', function(){
  it('Has message', function(){
    var vm = new ViewModel();
    vm.attr('message').should.equal('This is the simple-form component');
  });
});
