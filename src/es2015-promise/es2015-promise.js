import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './es2015-promise.less';
import view from './es2015-promise.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the es2015-promise component'
  }
});

export default Component.extend({
  tag: 'es2015-promise',
  ViewModel,
  view
});
