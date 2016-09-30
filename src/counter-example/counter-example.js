import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './counter-example.less!';
import template from './counter-example.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the counter-example component'
    }
  }
});

export default Component.extend({
  tag: 'counter-example',
  viewModel: ViewModel,
  template
});