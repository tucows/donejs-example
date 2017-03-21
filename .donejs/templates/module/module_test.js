import 'steal-mocha'
import module from './<%= name %>';
import chai from 'chai';

chai.should();

describe('<%= module %>', function(){
  it('Initialized the module', function(){
    (typeof module).should.equal('function');
    module().should.equal('This is the <%= name %> module');
  });
});
