import { ViewModel } from './counter-example';

// ViewModel unit tests
describe('donejs-example/counter-example', function(){
  it('Has message', function(){
    var vm = new ViewModel();
    vm.attr('message').should.equal('This is the counter-example component');
  });
});
