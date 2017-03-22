import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './live-binding.less!';
import template from './live-binding.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the live-binding component'
    }
  }
});

export default Component.extend({
  tag: 'live-binding',
  viewModel: ViewModel,
  template
});