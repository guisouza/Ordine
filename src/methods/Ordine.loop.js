;(function(Ordine) {
  Ordine.prototype.loop = function(untill){
    if (!untill){
      untill = 0;
      for(var procc in this.procs){
        if (!this.waiting.shoudI){
          if (this.procs[procc].wait){
            this.waiting = {
              shoudI : true,
              proc : procc
            };
          }else{
            this.procs[procc].proc();
          }
        }
      }
    }else{
      for(var _procc in this.procs){
        if (_procc >= this.waiting.proc){
          if (_procc === this.waiting.proc){
            this.procs[_procc].proc();
          }else{
            if (this.procs[_procc].wait){
              this.waiting = {
                shoudI : true,
                proc : _procc
              };
            }else{
              this.procs[_procc].proc();
            }
          }
        }
      }
    }
  };

} (this.Ordine));