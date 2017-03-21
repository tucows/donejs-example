import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './example-devices.less!';
import template from './example-devices.stache!';
import '../models/device.js';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the example-devices component'
    }
  }
});

export default Component.extend({
  tag: 'example-devices',
  viewModel: ViewModel,
  template
});
