import module from './<%= name %>';

describe('<%= module %>', function(){
  it('Initialized the module', function(){
    (typeof module).should.equal('function');
    module().should.equal('This is the <%= name %> module');
  });
});
