import { ViewModel } from './<%= name %>';

// ViewModel unit tests
describe('<%= module %>', function(){
  it('Has message', function(){
    var vm = new ViewModel();
    vm.attr('message').should.equal('This is the <%= tag %> component');
  });
});
