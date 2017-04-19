"use strict";
import Component from "can-component";
import CanMap from "can-map";
import "can-map-define";
import './modify-ajax.less!';
import template from './modify-ajax.stache!';
import fixture from "can-fixture";

const modifyAjax = function() {
	const path = "/api/modify-ajax";
	var def = new can.Deferred();	
  ajax(path).then(
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

export const ViewModel = CanMap.extend({
  define: {
    stuff: {
			value() {
				return modifyAjax();
			}
    }
  }
});

fixture("GET /api/modify-ajax", function() {
	return {
		message: "The simple ajax call returned this."
	}
});

export default Component.extend({
  tag: 'modify-ajax',
  viewModel: ViewModel,
  view
});
