// VVhat ?!?

// None of zese codevarriors seemz to remember hiz ovvn name !

// Kould you help ?

// var albert = new Warrior("Al")
// var boris  = new Warrior("Boris")

// albert.toString() --> "Hi! my name's Boris" <-- ohoh..

//? Parameters: 

//? Return: 

//? Example:

//? Pseudocode: 

function Warrior(n){ //! called time need to revisit 
    const name = n;  
    this.name = function(n){
      if( n ) name=n;
      return name;
    }
  }
    
  Warrior.prototype.toString = function(){
      return "Hi! my name's "+this.name();
  }
  console.log()

// Test.assertEquals(albert.toString(),"Hi! my name's Albert");
// Test.assertEquals(albert.name(),"Albert");
// Test.assertEquals(boris.name(),"Boris");