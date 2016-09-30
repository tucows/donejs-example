import 'steal-mocha'
import { ViewModel } from './<%= name %>';
import chai from 'chai';

chai.should();

// ViewModel unit tests
describe('<%= module %>', function(){
  it('Has message', function(){
    var vm = new ViewModel();
    vm.attr('message').should.equal('This is the <%= tag %> component');
  });
});
