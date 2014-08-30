// Cycle Icon designed by Nick Remis - http://www.thenounproject.com/nremis/

;(function(world){
  'use strict';

  var Queue = function(params){
    this.finalCallback = params.callback || false;
    this.processes = [];
    this.completedProcesses = 0;
    this.waiting = false;

    if (typeof params == 'function'){
      this.finalCallback = params;
    }
    return this;
  };

  world.Queue = Queue;
})(this);
// Cycle Icon designed by Nick Remis - http://www.thenounproject.com/nremis/

;(function(world){
  'use strict';

  var Queue = function(params){
    this.finalCallback = params.callback || false;
    this.processes = [];
    this.completedProcesses = 0;
    this.waiting = false;

    if (typeof params == 'function'){
      this.finalCallback = params;
    }
    return this;
  };

  world.Queue = Queue;
})(this);
;(function(Queue) {
  Queue.prototype.enqueue = function(proccess,waitPrevious){
  	this.processes.push({
      process : proccess,
      wait : waitPrevious || false
    });
    return this;
  };

} (this.Queue));
;(function(Queue) {
  Queue.prototype.loop = function(untill){
    if (!untill){
      untill = 0;
      for(var proccess in this.processes){
        if (!this.waiting.shoudI){
          if (this.processes[proccess].wait){
            this.waiting = {
              shoudI : true,
              process : proccess
            };
          }else{
            this.processes[proccess].process();
          }
        }
      }
    }else{
      for(var _proccess in this.processes){
        if (_proccess >= this.waiting.process){
          if (_proccess === this.waiting.process){
            this.processes[_proccess].process();
          }else{
            if (this.processes[_proccess].wait){
              this.waiting = {
                shoudI : true,
                process : _proccess
              };
            }else{
              this.processes[_proccess].process();
            }
          }
        }
      }
    }
  };

} (this.Queue));
;(function(Queue) {
  Queue.prototype.next = function(){
    this.completedProcesses +=1;

    if (this.processes.length === this.completedProcesses){
    	this.finalCallback();
    }

  	if (this.waiting.shoudI){
      if (this.waiting.process == this.completedProcesses){
        this.waiting.shoudI = false;
        this.resume();
      }
    }
  };

} (this.Queue));
;(function(Queue) {
  Queue.prototype.resume = function(){
		this.loop(this.waiting.process);
  };

} (this.Queue));
;(function(Queue) {

  Queue.prototype.run = function(){
  	this.loop();
    return this;
  };

} (this.Queue));