import 'steal-mocha'
import Devices from './devices';
import chai from 'chai';

chai.should();

describe('models/devices', function() {
  it('getList', function(done){
    Devices.getList().then(function(items) {
      items.length.should.equal(2);
      items.attr('0.description').should.equal('First item');
      done();
    });
  });
});
