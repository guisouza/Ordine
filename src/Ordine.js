// Cycle Icon designed by Nick Remis - http://www.thenounproject.com/nremis/

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
