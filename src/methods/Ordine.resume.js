;(function(Ordine) {
	'use strict';
  Ordine.prototype.resume = function(){	
		this.loop(this.completedprocs);
  };
} (this.Ordine));