class SuperHero{
    // Create A Constructor To Initialize The Name 
    constructor(name){
        
        this.name = name;
    }
    
    // Add Teo Methods To Get And Set The Name

    getName(){
        return this.name;
    }
    
    setName(name /*receives a name and sets it to this.name*/){
        this.name = name;
    }
    }

    // Export An Instance Of The Class

    module.exports = SuperHero;