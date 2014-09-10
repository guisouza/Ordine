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