import QUnit from 'steal-qunit';
import { ViewModel } from './modify-ajax2';

// ViewModel unit tests
QUnit.module('donejs-example/modify-ajax2');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the modify-ajax-2 component');
});
