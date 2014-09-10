;(function(Ordine) {
  Ordine.prototype.resume = function(){	
		this.loop(this.completedprocs);
  };

} (this.Ordine));