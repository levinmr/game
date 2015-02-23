require 'convert_hash_case'

class AbstractModel < ActiveRecord::Base

  include ConvertHashCase

  self.abstract_class = true

  def as_json( options = {} )
    camelize_keys( super( options ) )
  end
end