;(function(Ordine) {
  Ordine.prototype.resume = function(){
		this.loop(this.waiting.proc);
  };

} (this.Ordine));