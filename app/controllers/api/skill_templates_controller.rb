class Api::SkillTemplatesController < ApplicationController

  def index
    skill_templates = SkillTemplate.all

    if skill_templates.blank?
      render json: { error: 'SkillTemplate could not be found' }, status: :not_found
    else
      render json: skill_templates.as_json, status: :ok
    end
  end

  def create
    skill_template = SkillTemplate.new( skill_template_params )

    begin
      skill_template.save!
      render json: skill_template.as_json, status: :created
    rescue ActiveRecord::RecordInvalid
      render json: { error: 'SkillTemplate is invalid' }, status: :bad_request
    rescue ActiveRecord::RecordNotSaved
      render json: { error: 'SkillTemplate could not be saved' }, status: :internal_server_error
    end
  end

  def update
    skill_template = SkillTemplate.find_by_id( skill_template_params[:id] )

    if skill_template.nil?
      render json: { error: 'SkillTemplate could not be found' }, status: :not_found
    else
      skill_template.assign_attributes( skill_template_update_params )

      begin
        skill_template.save!
        render json: skill_template.as_json, status: :ok
      rescue ActiveRecord::RecordInvalid
        render json: { error: 'SkillTemplate is invalid' }, status: :bad_request
      rescue ActiveRecord::RecordNotSaved
        render json: { error: 'SkillTemplate could not be saved' }, status: :internal_server_error
      end
    end
  end

  def destroy
    skill_template = SkillTemplate.find_by_id( skill_template_params[:id] )

    if skill_template.nil?
      render json: { error: 'SkillTemplate could not be found' }, status: :not_found
    else
      skill_template.status = INACTIVE

      begin
        skill_template.save!
        render json: skill_template.as_json, status: :ok
      rescue ActiveRecord::RecordNotSaved
        render json: { error: 'SkillTemplate could not be deleted' }, status: :internal_server_error
      end
    end
  end

  private

  def skill_template_params
    @params.permit(
      :id, :cerner_id, :empi, :epic_mrn,
      :first_name, :middle_name, :last_name,
      :dob, :race, :sex, :status
    )
  end

  def skill_template_update_params
    @params.permit(
      :cerner_id, :epic_mrn,
      :first_name, :middle_name, :last_name, :dob, :race, :sex
    )
  end
end
