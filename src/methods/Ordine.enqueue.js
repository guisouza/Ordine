;(function(Queue) {
  Queue.prototype.enqueue = function(proccess,waitPrevious){
  	this.processes.push({
      process : proccess,
      wait : waitPrevious || false
    });
    return this;
  };

} (this.Queue));