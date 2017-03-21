import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './simple-form.less!';
import template from './simple-form.stache!';

export const ViewModel = Map.extend({
	form: {}, //empty form
	send: function(ev) {
		ev.preventDefault();
		let data = this.form.attr();
		console.log(data);
	}
});

export default Component.extend({
  tag: 'simple-form',
  viewModel: ViewModel,
	template
});
