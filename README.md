
![alt text](http://i.imgur.com/2grQz3L.png "Ordine")

Callbacks made almost easy
======
Simple queue system to handle callbacks


Constructor : 
======

```javascript
    var myQueue = new Queue(function(){
      console.log('uh!?')
    })
```


# Constructor arguments : 
  __callback(function):__
This the only required argument which is the callback for the queue.


#Enqueue method : 

```javascript

    var myQueue = new Queue(function(){
      console.log('uh!?')
    })
    .enqueue(function(){

      window.setTimeout(function(){
        console.log('first')
        myQueue.next()
      },1000);
    })

    .enqueue(function(){
      window.setTimeout(function(){
        console.log('second')
        myQueue.next()
      },1000);
    },false)

    .enqueue(function(){
      window.setTimeout(function(){
        console.log('third')
        myQueue.next()
      },1000);
    },true)
    .run()

```

# Enqueue arguments :

  __Proccess(function):__
  
Asynchronous stuff.

  __Sync(boolean):__
  
This argument have to be the answer for the question : "This process will wait the previous process end to be executed"


# Run Method : 

The run method trigger the queue execution.


// Cycle Icon designed by Nick Remis - http://www.thenounproject.com/nremis/