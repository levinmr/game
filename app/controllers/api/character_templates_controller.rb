class Api::CharacterTemplatesController < ApplicationController

  def index
    character_templates = CharacterTemplate.all

    if character_templates.blank?
      render json: { error: 'CharacterTemplate could not be found' }, status: :not_found
    else
      render json: character_templates.as_json, status: :ok
    end
  end

  def create
    character_template = CharacterTemplate.new( character_template_params )

    begin
      character_template.save!
      render json: character_template.as_json, status: :created
    rescue ActiveRecord::RecordInvalid
      render json: { error: 'CharacterTemplate is invalid' }, status: :bad_request
    rescue ActiveRecord::RecordNotSaved
      render json: { error: 'CharacterTemplate could not be saved' }, status: :internal_server_error
    end
  end

  def update
    character_template = CharacterTemplate.find_by_id( character_template_params[:id] )

    if character_template.nil?
      render json: { error: 'CharacterTemplate could not be found' }, status: :not_found
    else
      character_template.assign_attributes( character_template_update_params )

      begin
        character_template.save!
        render json: character_template.as_json, status: :ok
      rescue ActiveRecord::RecordInvalid
        render json: { error: 'CharacterTemplate is invalid' }, status: :bad_request
      rescue ActiveRecord::RecordNotSaved
        render json: { error: 'CharacterTemplate could not be saved' }, status: :internal_server_error
      end
    end
  end

  def destroy
    character_template = CharacterTemplate.find_by_id( character_template_params[:id] )

    if character_template.nil?
      render json: { error: 'CharacterTemplate could not be found' }, status: :not_found
    else
      character_template.status = INACTIVE

      begin
        character_template.save!
        render json: character_template.as_json, status: :ok
      rescue ActiveRecord::RecordNotSaved
        render json: { error: 'CharacterTemplate could not be deleted' }, status: :internal_server_error
      end
    end
  end

  private

  def character_template_params
    @params.permit(
      :id, :cerner_id, :empi, :epic_mrn,
      :first_name, :middle_name, :last_name,
      :dob, :race, :sex, :status
    )
  end

  def character_template_update_params
    @params.permit(
      :cerner_id, :epic_mrn,
      :first_name, :middle_name, :last_name, :dob, :race, :sex
    )
  end
end
