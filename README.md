



![alt text](http://i.imgur.com/2grQz3L.png "Ordine")

Callbacks made almost easy
======
Simple queue system to handle callbacks


Constructor : 
======

```javascript
//Full construction
var myQueue = new Queue({
  callback : function(){
    console.log('finished');
  },
  context : this
})

//Passing only the callback
var myQueue = new Queue(function(){
  console.log('finished');
})
```


##Constructor arguments : 
  ###callback(function):
This the only required argument which is the callback for the queue.
  ###context(object):
The context argument is the context in which the Callbacks will be executed.


##Enqueue method : 

```javascript
var myQueue = new Queue(function(){
  console.log('finished');
})

.enqueue(function(){
  window.setTimeout(function(){
    myQueue.next()
  },1000);
  
.enqueue(function(){
  window.setTimeout(function(){
    myQueue.next()
  },1000);
},false)

```
##Enqueue arguments : 

  ###proccess(function):
  
Asynchronous stuff.

  ###sync(boolean): 
  
This argument have to be the answer for the question : "This process will wait the previous process end to be executed"


##Run Method : 

The run method trigger the queue execution.
