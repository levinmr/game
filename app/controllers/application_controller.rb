require 'convert_hash_case'

class ApplicationController < ActionController::API

  include ActionController::MimeResponds
  include ConvertHashCase
  include GlobalConstants

  before_filter :convert_params_to_snake_case

  private

  def convert_params_to_snake_case
    @params = ActionController::Parameters.new( hash_keys_to_snake_case( params ) )
  end
end
