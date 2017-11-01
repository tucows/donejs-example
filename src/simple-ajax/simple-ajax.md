@parent donejs-example
@module {can.Component} donejs-example/simple-ajax <simple-ajax>

This component showcases a common pattern for making simple ajax calls when you don't want the complexity of using can-connect

@signature `<simple-ajax>`

@body

## Use

Ajax calls are simple to perform and store in a define map. An Ajax call is in it's simplist for a promise. As of jQuery 3, jQuery returns a standard Promise as the return of an ajax call.

So we simply return a promise in a prop getter.
```javascript
get() {
	return $.ajax("/api/simple-ajax");
}
```

Now, when accessing this property, because it's a promise, the actual prop will not have the value we expect. Instead, we have a Promise object. We can check to see if it's resolved by checking it's `isResolved` property. Once resolved, you can see it's `value` property for the returned value.

Since we'd rather not have to access it's value property (think a large object with many properties), our pattern has a promise property and then the actualy property stored in a different key which uses the getters `resolve` callback. 

```
get(lastValue, resolve) {
	this.messagePromise.then((response)=>{
		resolve(response + " And we modified the response.");
	}, resolve);
}
```

## Testing

If you try to access a property that takes in a Promise and uses the resolve callback, it won't actually return anything right away and you will get undefined in your test. This is because these properties are expected to be bound to a live view. To get around this, you simply perform a bind in your tests

```
vm.on('message', ()={});
```
This triggers the event and assigns the value as expected.
