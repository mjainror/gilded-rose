require File.join(File.dirname(__FILE__), 'gilded_rose')
require 'test/unit'

class TestUntitled < Test::Unit::TestCase

  def test_foo
    items = [Item.new("foo", 0, 0)]
    GildedRose.new(items).update_quality()
    assert_equal items[0].name, "foo"
  end

  def test_conjured_quality
    items = [Item.new("Conjured", 10, 30)]
    GildedRose.new(items).update_quality()
    assert_equal items[0].quality, 28
  end
end