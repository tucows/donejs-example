import 'steal-mocha'
import { ViewModel } from './example-devices';
import chai from 'chai';

chai.should();

// ViewModel unit tests
describe('donejs-example/example-devices', function(){
  it('Has message', function(){
    var vm = new ViewModel();
    vm.attr('message').should.equal('This is the example-devices component');
  });
});
