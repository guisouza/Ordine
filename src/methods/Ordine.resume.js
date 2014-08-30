;(function(Queue) {
  Queue.prototype.resume = function(){
		this.loop(this.waiting.process);
  };

} (this.Queue));