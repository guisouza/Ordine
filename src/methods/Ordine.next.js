;(function(Ordine) {
  Ordine.prototype.next = function(){
    this.completedprocs +=1;

    if (this.procs.length === this.completedprocs){
    	this.finalCallback();
    }

  	if (this.waiting.shoudI){
      if (this.waiting.proc == this.completedprocs){
        this.waiting.shoudI = false;
        this.resume();
      }
    }
  };

} (this.Ordine));