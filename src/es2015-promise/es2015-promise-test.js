import QUnit from 'steal-qunit';
import { ViewModel } from './es2015-promise';

// ViewModel unit tests
QUnit.module('donejs-example/es2015-promise');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the es2015-promise component');
});
