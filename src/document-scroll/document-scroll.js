import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './document-scroll.less';
import view from './document-scroll.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the document-scroll component'
	},
	scrolled: {
		value() {
			return false;
		}
	}
});

export default Component.extend({
  tag: 'document-scroll',
  ViewModel,
	view,
	events: {
		"{document} scroll"(ev, el) {
			this.viewModel.scrolled = true;
		}
	}
});
