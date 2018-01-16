import QUnit from 'steal-qunit';
import { ViewModel } from './document-scroll';

// ViewModel unit tests
QUnit.module('donejs-example/document-scroll');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.message, 'This is the document-scroll component');
});
