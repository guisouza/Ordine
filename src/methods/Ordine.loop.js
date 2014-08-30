;(function(Queue) {
  Queue.prototype.loop = function(untill){
    if (!untill){
      untill = 0;
      for(var proccess in this.processes){
        if (!this.waiting.shoudI){
          if (this.processes[proccess].wait){
            this.waiting = {
              shoudI : true,
              process : proccess
            };
          }else{
            this.processes[proccess].process();
          }
        }
      }
    }else{
      for(var _proccess in this.processes){
        if (_proccess >= this.waiting.process){
          if (_proccess === this.waiting.process){
            this.processes[_proccess].process();
          }else{
            if (this.processes[_proccess].wait){
              this.waiting = {
                shoudI : true,
                process : _proccess
              };
            }else{
              this.processes[_proccess].process();
            }
          }
        }
      }
    }
  };

} (this.Queue));