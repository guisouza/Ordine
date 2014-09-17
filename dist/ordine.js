;(function(world){
  'use strict';
  var Ordine = function(params,error){
    this.success = params.success || false;
    this.error = params.error || false;
    this.procs = [];
    this.completedprocs = 0;
    this.waiting = {
      shouldI : false
    };

    if (typeof params == 'function'){
      this.success = params;
      this.error = error || false;
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
;(function(Ordine) {
  'use strict';
  Ordine.prototype.loop = function(untill){
    for (var proc in this.procs){
      if (proc >= this.completedprocs){
        if (this.waiting.shouldI === false){

          if (!untill){
            if (this.procs[proc].wait){
              this.waiting.shouldI = true;
              this.waiting.proc = proc;
            }else{
              this.procs[proc].proc();
            }
          }else{
            if (proc == untill){
              this.procs[proc].proc();
            }else{
              if (this.procs[proc].wait){
                this.waiting.shouldI = true;
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
  'use strict';
  Ordine.prototype.next = function(){
    this.completedprocs +=1;
    if (this.procs.length === this.completedprocs){
    	this.success();
    }
  	if (this.waiting.shouldI){
      if (this.waiting.proc == this.completedprocs){
        this.waiting.shouldI = false;
        this.resume();
      }
    }
  };

} (this.Ordine));
;(function(Ordine) {
	'use strict';
  Ordine.prototype.resume = function(){	
		this.loop(this.completedprocs);
  };
} (this.Ordine));
;(function(Ordine) {
	'use strict';
  Ordine.prototype.run = function(){
  	this.loop();
    return this;
  };
} (this.Ordine));