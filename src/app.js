"use strict";
import DefineMap from 'can-define/map/';
import route from 'can-route';
import 'can-route-pushstate';

route(':page', {page: 'home'});

const AppViewModel = DefineMap.extend({seal: false}, {
  message: {
    value: 'Hello World!',
    serialize: false
  },
  title: {
    value: 'donejs-example',
    serialize: false
  }
});

export default AppViewModel;
