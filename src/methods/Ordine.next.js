;(function(Ordine) {
  'use strict';
  Ordine.prototype.next = function(params){
    this.completedprocs +=1;
    if (this.procs.length === this.completedprocs){
    	this.success(params);
    }
  	if (this.waiting.shouldI){
      if (this.waiting.proc == this.completedprocs){
        this.waiting.shouldI = false;
        this.resume(params);
      }
    }
  };

} (this.Ordine));
