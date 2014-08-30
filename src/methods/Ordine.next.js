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