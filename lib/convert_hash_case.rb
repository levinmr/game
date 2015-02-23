# Converts hash keys from camelCase to snake_case and vice versa
#
# Ruby/Rails prefers snake case and JavaScript convention is camel case.
# Including this module allows you to seamlessly transition between the two.
#
# Wraps as_json, converting all hash keys to camel (Needs to be required in the model),
# provides a method to use in your controller which can convert the params hash to snake.

module ConvertHashCase

  def as_json( options = {} )
    camelize_keys( super( options ) )
  end

  def hash_keys_to_snake_case( value )
    case value
    when Array
      value.map { |v| hash_keys_to_snake_case(v) }
    when Hash
      values = value.map { |k, v| [snake_key(k), hash_keys_to_snake_case(v)] }
      Hash[values]
    else
      value
    end
  end

  private

  def camelize_keys( hash )
    values = hash.map do |key, value|
      [key.camelize( :lower ), value]
    end
    Hash[values]
  end

  def snake_key( key )
    key.to_s.underscore
  end
end
