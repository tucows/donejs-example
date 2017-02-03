import fixture from 'can-fixture';

const store = fixture.store([{
  id: 0,
  description: 'First item'
}, {
  id: 1,
  description: 'Second item'
}]);

fixture({
  'GET /api/devices': store.findAll,
  'GET /api/devices/{id}': store.findOne,
  'POST /api/devices': store.create,
  'PUT /api/devices/{id}': store.update,
  'DELETE /api/devices/{id}': store.destroy
});

export default store;
