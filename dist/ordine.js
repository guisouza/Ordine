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
  Ordine.prototype.loop = function(untill,params){
    for (var proc in this.procs){
      if (proc >= this.completedprocs){
        if (this.waiting.shouldI === false){

          if (!untill){
            if (this.procs[proc].wait){
              this.waiting.shouldI = true;
              this.waiting.proc = proc;
            }else{
              this.procs[proc].proc(params);
            }
          }else{
            if (proc == untill){
              this.procs[proc].proc(params);
            }else{
              if (this.procs[proc].wait){
                this.waiting.shouldI = true;
                this.waiting.proc = proc;
              }else{
                this.procs[proc].proc(params);
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
  Ordine.prototype.next = function(params){
    this.completedprocs +=1;
    if (this.procs.length === this.completedprocs){
    	this.success(params);
    }
  	if (this.waiting.shouldI){
      if (this.waiting.proc == this.completedprocs){
        this.waiting.shouldI = false;
        this.resume(params);
      }
    }
  };

} (this.Ordine));

;(function(Ordine) {
	'use strict';
  Ordine.prototype.resume = function(params){
		this.loop(this.completedprocs,params);
  };
} (this.Ordine));

;(function(Ordine) {
	'use strict';
  Ordine.prototype.run = function(){
  	this.loop();
    return this;
  };
} (this.Ordine));