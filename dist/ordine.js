// Cycle Icon designed by Nick Remis - http://www.thenounproject.com/nremis/

;(function(world){
  'use strict';



  var Ordine = function(params){
    this.finalCallback = params.callback || false;
    this.procs = [];
    this.completedprocs = 0;
    this.waiting = {
      shoudI : false
    };

    if (typeof params == 'function'){
      this.finalCallback = params;
    }
    return this;
  };

  if( typeof exports !== 'undefined' ) {
    if( typeof module !== 'undefined' && module.exports ) {
      exports = module.exports = Ordine;
    }
    module.exports = Ordine;
  } 
 world.Ordine = Ordine;


  
})(this);

;(function(Ordine) {
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
;(function(Ordine) {
  Ordine.prototype.loop = function(untill){

    for (var proc in this.procs){


      if (proc >= this.completedprocs){
        if (this.waiting.shoudI === false){

          if (!untill){
            if (this.procs[proc].wait){
              this.waiting.shoudI = true;
              this.waiting.proc = proc;
            }else{
              this.procs[proc].proc();
            }

          }else{
            if (proc == untill){
              this.procs[proc].proc();
            }else{
              if (this.procs[proc].wait){
                this.waiting.shoudI = true;
                this.waiting.proc = proc;
              }else{
                this.procs[proc].proc();
              }
            }

          }


        }
      }
    }
  };
} (this.Ordine));
;(function(Ordine) {
  Ordine.prototype.next = function(){

    this.completedprocs +=1;

    if (this.procs.length === this.completedprocs){
    	this.finalCallback();
    }

  	if (this.waiting.shoudI){
      if (this.waiting.proc == this.completedprocs){
        this.waiting.shoudI = false;
        this.resume();
      }
    }
  };

} (this.Ordine));
;(function(Ordine) {
  Ordine.prototype.resume = function(){	
		this.loop(this.completedprocs);
  };

} (this.Ordine));
;(function(Ordine) {

  Ordine.prototype.run = function(){
  	this.loop();
    return this;
  };

} (this.Ordine));