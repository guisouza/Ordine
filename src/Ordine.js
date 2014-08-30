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