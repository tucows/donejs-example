import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';
import 'can-define';
import './fixtures/devices';

export const Devices = can.Map.extend({
  define: {}
});

Devices.List = can.List.extend({
  Map: Devices
}, {});

export const devicesConnection = superMap({
  url: '/devices',
  idProp: 'id',
  Map: Devices,
  List: Devices.List,
  name: 'devices'
});

tag('devices-model', devicesConnection);

export default Devices;
