require 'test_helper'


class CityTest < ActiveSupport::TestCase
 setup do
   @city = cities(:one)
   @cityWrong = cities(:two)
 end
 
 
end