import 'steal-mocha'
import Device from './device';
import chai from 'chai';

chai.should();

describe('models/device', function() {
  it('getList', function(done){
    Device.getList().then(function(items) {
      items.length.should.equal(2);
      items.attr('0.description').should.equal('First item');
      done();
    });
  });
});
