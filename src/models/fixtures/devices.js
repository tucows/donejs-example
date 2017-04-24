import fixture from 'can-fixture';

const store = fixture.store([{
  id: 0,
  description: 'First item'
}, {
  id: 1,
  description: 'Second item'
}]);

fixture({
  'GET /devices': store.findAll,
  'GET /devices/{id}': store.findOne,
  'POST /devices': store.create,
  'PUT /devices/{id}': store.update,
  'DELETE /devices/{id}': store.destroy
});

export default store;
