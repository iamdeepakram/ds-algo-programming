function Airplane(name) {
    this.name = name;
    this.isFlying = false;
    
    this.takeOff = function(){
      if(!this.isFlying){
        this.isFlying = true;
      }
    }
    this.land = function(){
      if(this.isFlying){
        this.isFlying = false;
      }
        
    }

};
//edit above function and add methods if needed
module.exports = Airplane;