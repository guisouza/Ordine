;(function(Queue) {

  Queue.prototype.run = function(){
  	this.loop();
    return this;
  };

} (this.Queue));