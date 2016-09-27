"use strict";
import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './modify-ajax.less!';
import template from './modify-ajax.stache!';
import Fixture from 'can/util/fixture/';

const modifyAjax = function() {
	const path = "/api/modify-ajax";
	var def = new can.Deferred();	
  can.ajax(path).then(
		//success
		(response) => {
			response.message += " And it was modified to have this.";
			def.resolve(response);
		},
		//fail
		(xhr) => {
			def.reject(xhr);
		}
	);
	return def;
}

export const ViewModel = Map.extend({
  define: {
    stuff: {
			value() {
				return modifyAjax();
			}
    }
  }
});

Fixture("GET /api/modify-ajax", function() {
	return {
		message: "The simple ajax call returned this."
	}
});

export default Component.extend({
  tag: 'modify-ajax',
  viewModel: ViewModel,
  template
});
