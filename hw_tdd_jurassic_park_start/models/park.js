const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinoCollection = [];
  }
  
  module.exports = Park;

  Park.prototype.addDino = function(dino) {
    this.dinoCollection.push(dino);
    };
    
    Park.prototype.removeDino = function() {
        this.dinoCollection.pop();
    };

    Park.prototype.getMostPopularDino = function(collection){
        const collection = collection
        let mostPopularDino = collection.reduce((max, obj) => (max.guestsAttractedPerDay > obj.guestsAttractedPerDay) ? max : obj);
        return mostPopularDino.name
        };






