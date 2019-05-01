var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("fixme");
  });

  it("should degrade in Quality for Conjured", function() {
    const gildedRose = new Shop([ new Item("Conjured", 10, 30) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(28);
  });

});
