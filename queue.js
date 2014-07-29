// Cycle Icon designed by Nick Remis - http://www.thenounproject.com/nremis/
;(function(root) {
  'use strict';

  var Queue = function(params){

    this.callback = (params.callback) ? params.callback : function(){console.log('Queue Finish')};
    this.context  = (params.context)  ? params.context  : this;
    this.processes = [];
    this.date = new Date();
    this.completedProcesses = 0;
    this.waiting = false;

    if (typeof params == 'function'){
      this.callback = params;
    }
  }

  Queue.prototype.enqueue = function(){
    var newProccess = {};
    newProccess.sync = (this.processes.length > 0) ? arguments[1] : false;
    newProccess.process = arguments[0];
    this.processes.push(newProccess);
    return this;
  }

  Queue.prototype.run = function(context){
    if (this.processes.length == 0){
      this.callback.call(this.context);
    }else{
      this.runContext = context;
      this.loop(0,context);
    }
    return this;
  }

  Queue.prototype.resume = function(index){
    this.loop(index,this.runContext);
  }

  Queue.prototype.next = function(){
    this.completedProcesses += 1;
    if (this.completedProcesses == this.processes.length){
      this.callback.call(this.context);
    }else{
      if (this.waiting.waiting == true || this.waiting.processes == this.completedProcesses){
        this.processes[this.waiting.processes].sync = false;
        this.resume(this.waiting.processes);
        this.waiting.waiting = false;
      }
    }
  }

  Queue.prototype.loop  = function(index,context){
    for (var i = index; i <= this.processes.length-1; i++) {
      if (this.processes[i]['sync']){
        this.waiting = {
          waiting : true,
          processes : i
        };
        break;
      }else{
        this.processes[i]['process'].call(context);
      }
    }
  }

  root.Queue = Queue;
} (this))