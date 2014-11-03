;(function(Ordine) {
	'use strict';
  Ordine.prototype.resume = function(params){
		this.loop(this.completedprocs,params);
  };
} (this.Ordine));
