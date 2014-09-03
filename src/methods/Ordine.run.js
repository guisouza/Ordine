;(function(Ordine) {

  Ordine.prototype.run = function(){
  	console.log('run');
  	this.loop();
    return this;
  };

} (this.Ordine));