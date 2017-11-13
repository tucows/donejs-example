import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './es2015-promise.less';
import view from './es2015-promise.stache';

export const ViewModel = DefineMap.extend({
	message: {
		get(previousValue, resolve) {
			this.messagePromise.then(resolve); // def could be any function call that returns a promise
		}
	},
	messagePromise: {
		get() {
			return new Promise((resolve, reject) => {
				// contrived example of an async deferred response
				setTimeout(()=>{resolve('This is my late response');}, 100);
			});
			
		}
	}
});

export default Component.extend({
	tag: 'es2015-promise',
	ViewModel,
	view
});
