import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './simple-ajax.less!';
import template from './simple-ajax.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the simple-ajax component'
    }
  }
});

export default Component.extend({
  tag: 'simple-ajax',
  viewModel: ViewModel,
  template
});
