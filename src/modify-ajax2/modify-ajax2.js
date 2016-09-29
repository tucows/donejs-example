"use strict";
import Component from 'can/component/';
import Map from 'can/map/';
import List from 'can/list/';
import './modify-ajax2.less!';
import template from './modify-ajax2.stache!';
import Fixture from 'can/util/fixture/';

export const ViewModel = Map.extend({
	myArray: new List(),
	/**
	 * @function getArray
	 * @description performs the ajax call to get our array and modifies it. Then updates the live bound Map witht he modified data
	 **/
	getArray() {
		can.ajax({
			'url': '/api/modify-ajax2',
			success: function(response) {
				response.myArray.push("modified");
				this.viewModel.myArray.attr(response.myArray);
			}.bind(this)
		});
	}
});

Fixture("GET /api/modify-ajax2", function() {
	return {
		myArray: [1,2,3,4,5]
	}
});

export default Component.extend({
  tag: 'modify-ajax-2',
  viewModel: ViewModel,
	init() {
		this.ViewModel.getArray();
	},
  template,
});
