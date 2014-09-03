;(function(Ordine) {
  Ordine.prototype.enqueue = function(procc,waitPrevious){
  	this.procs.push({
      proc : procc,
      wait : waitPrevious || false
    });
    return this;
  };

} (this.Ordine));