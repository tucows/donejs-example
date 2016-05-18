import F from 'funcunit';
import QUnit from 'steal-qunit';

F.attach(QUnit);

QUnit.module('donejs-example functional smoke test', {
  beforeEach() {
    F.open('../development.html');
  }
});

QUnit.test('donejs-example main page shows up', function() {
  F('title').text('donejs-example', 'Title is set');
});
