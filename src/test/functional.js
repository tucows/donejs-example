import F from 'funcunit';
import mocha from 'steal-mocha';

F.attach(mocha);

describe('donejs-example functional smoke test', function(){
  beforeEach(function(){
    F.open('../development.html');
  });

  it('donejs-example main page shows up', function(){
    F('title').text('donejs-example', 'Title is set');
  });
	it('navigation gets rendered', function () {
		F('header nav').exists();
	});
});

