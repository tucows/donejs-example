import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';
import CanMap from "can-map";
import CanList from 'can-list';
import 'can-define';
import './fixtures/devices';

export const Devices = CanMap.extend({
  define: {}
});

Devices.List = CanList.extend({
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
