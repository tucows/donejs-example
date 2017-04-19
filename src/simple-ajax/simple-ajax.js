"use strict";
import Component from "can-component";
import CanMap from "can-map";
import "can-map-define";
import './simple-ajax.less!';
import template from './simple-ajax.stache!';
import fixture from "can-fixture";

export const ViewModel = CanMap.extend({
  define: {
    stuff: {
			value() {
				return ajax("/api/simple-ajax");
			}
    }
  }
});

fixture("GET /api/simple-ajax", function() {
	return {
		message: "The simple ajax call returned this."
	}
});

export default Component.extend({
  tag: 'simple-ajax',
  viewModel: ViewModel,
  view
});
