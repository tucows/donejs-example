import Component from "can-component";
import CanMap from "can-map";
import can from 'can/util/deferred';
import "can-map-define";
import './complex-ajax.less!';
import template from './complex-ajax.stache!';
import fixture from "can-fixture";

export const ViewModel = CanMap.extend({
  define: {
    stuff: {
			value() {
				var def = can.Deferred();
				var response = [];
				var counter = 2;
					ajax("/api/complex-ajax1").then(
						(result) => {
							response.push(result);
							counter--;
							if (counter == 0) def.resolve(response);
					});
					ajax("/api/complex-ajax2").then(
						(result) => {
							response.push(result);
							counter--;
							if (counter == 0) def.resolve(response);
					});
				return def;
			}
    }
  }
});
	
fixture("GET /api/complex-ajax1", function() {
	return {
		message: "The ajax call 1 returned this."
	}
});
fixture("GET /api/complex-ajax2", function() {
	return {
		message: "The ajax call 2 returned this."
	}
});


export default Component.extend({
  tag: 'complex-ajax',
  viewModel: ViewModel,
  view
});
