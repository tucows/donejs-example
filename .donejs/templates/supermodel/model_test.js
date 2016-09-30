import <%= className %> from './<%= name %>';

describe('models/<%= name %>', function() {
  it('getList', function(done){
    <%= className %>.getList().then(function(items) {
      items.length.should.equal(2);
      items.attr('0.description').should.equal('First item');
      done();
    });
  });
});
