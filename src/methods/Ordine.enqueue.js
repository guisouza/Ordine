;(function(Ordine) {
  'use strict';
  Ordine.prototype.enqueue = function(procc,waitPrevious){
  	if (this.procs.length === 0){
  		waitPrevious = false;
  	}
  	this.procs.push({
      proc : procc,
      wait : waitPrevious || false
    });
    return this;
  };

} (this.Ordine));