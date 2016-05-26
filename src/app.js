"use strict";
import Map from "can/map/";
import route from "can/route/";
import 'can/map/define/';
import 'can/route/pushstate/';

route(':page', {page: 'home'});

const AppViewModel = Map.extend({
  define: {
    message: {
      value: 'Hello World!',
      serialize: false
    },
    title: {
      value: 'donejs-example',
      serialize: false
    }
  }
});

export default AppViewModel;
