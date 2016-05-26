import QUnit from 'steal-qunit';
import { ViewModel } from './modify-ajax';

// ViewModel unit tests
QUnit.module('donejs-example/modify-ajax');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the modify-ajax component');
});
