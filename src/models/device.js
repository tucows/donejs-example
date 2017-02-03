import can from 'can';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';
import 'can/map/define/define';

export const Device = can.Map.extend({
  define: {}
});

Device.List = can.List.extend({
  Map: Device
}, {});

export const deviceConnection = superMap({
  url: '/api/devices',
  idProp: 'id',
  Map: Device,
  List: Device.List,
  name: 'device'
});

tag('device-model', deviceConnection);

export default Device;
