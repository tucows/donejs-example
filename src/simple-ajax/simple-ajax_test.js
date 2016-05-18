import QUnit from 'steal-qunit';
import { ViewModel } from './simple-ajax';

// ViewModel unit tests
QUnit.module('donejs-example/simple-ajax');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the simple-ajax component');
});
