// Cycle Icon designed by Nick Remis - http://www.thenounproject.com/nremis/

;(function(world){
  'use strict';

  var Ordine = function(params){
    this.finalCallback = params.callback || false;
    this.procs = [];
    this.completedprocs = 0;
    this.waiting = false;

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
  else {
    world.Ordine = Ordine;
  }


  
})(this);