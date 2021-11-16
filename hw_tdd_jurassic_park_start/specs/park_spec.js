const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park("Lost World", 75);
  });

  it('should have a name', function(){
    const actual = park.name
    assert.strictEqual(actual, 'Lost World');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice
    assert.strictEqual(actual, 75);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinoCollection
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    const newDino1 = Dinosaur("brachiosaurus","herbivore",65);
    park.addDino(newDino1);
    const newDino2 = Dinosaur("archaeopteryx","carnivore",25);
    park.addDino(newDino2);
    const actual = park.dinoCollection.length
    assert.deepStrictEqual(actual, 2);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    const newDino1 = Dinosaur("brachiosaurus","herbivore",65);
    park.addDino(newDino1);
    const newDino2 = Dinosaur("archaeopteryx","carnivore",25);
    park.addDino(newDino2);
    park.removeDino();
    const actual = park.dinoCollection.length
    assert.deepStrictEqual(actual, 1);
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
