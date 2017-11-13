import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './jquery-deferred.less';
import view from './jquery-deferred.stache';
import $ from 'jquery';

export const ViewModel = DefineMap.extend({
	message: {
		get(previousValue, resolve) {
			this.messagePromise.then(resolve); // def could be any function call that returns a promise
		}
	},
	messagePromise: {
		get() {
			var def = $.Deferred(); // init a jQuery deferred object
			// contrived example of an async deferred response
			setTimeout(()=>{def.resolve('This is my late response');}, 100);
			return def;
		}
	}
});

export default Component.extend({
	tag: 'jquery-deferred',
	ViewModel,
	view
});
