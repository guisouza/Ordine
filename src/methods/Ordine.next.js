;(function(Ordine) {
  Ordine.prototype.next = function(){

    this.completedprocs +=1;

    if (this.procs.length === this.completedprocs){
    	this.success();
    }

  	if (this.waiting.shouldI){
      if (this.waiting.proc == this.completedprocs){
        this.waiting.shouldI = false;
        this.resume();
      }
    }
  };

} (this.Ordine));