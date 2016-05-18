import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './simple-ajax.less!';
import template from './simple-ajax.stache!';
import Fixture from 'can/util/fixture/';

export const ViewModel = Map.extend({
  define: {
    stuff: {
			value() {
				return can.ajax("/api/simple-ajax");
			}
    }
  }
});

Fixture("GET /api/simple-ajax", function() {
	return {
		message: "The simple ajax call returned this."
	}
});

export default Component.extend({
  tag: 'simple-ajax',
  viewModel: ViewModel,
  template
});
