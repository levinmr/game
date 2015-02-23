class Api::MemberSkillsController < ApplicationController

  def index
    memeber_skills = MemberSkill.all

    if memeber_skills.blank?
      render json: { error: 'MemberSkill could not be found' }, status: :not_found
    else
      render json: memeber_skills.as_json, status: :ok
    end
  end

  def create
    memeber_skill = MemberSkill.new( memeber_skill_params )

    begin
      memeber_skill.save!
      render json: memeber_skill.as_json, status: :created
    rescue ActiveRecord::RecordInvalid
      render json: { error: 'MemberSkill is invalid' }, status: :bad_request
    rescue ActiveRecord::RecordNotSaved
      render json: { error: 'MemberSkill could not be saved' }, status: :internal_server_error
    end
  end

  def update
    memeber_skill = MemberSkill.find_by_id( memeber_skill_params[:id] )

    if memeber_skill.nil?
      render json: { error: 'MemberSkill could not be found' }, status: :not_found
    else
      memeber_skill.assign_attributes( memeber_skill_update_params )

      begin
        memeber_skill.save!
        render json: memeber_skill.as_json, status: :ok
      rescue ActiveRecord::RecordInvalid
        render json: { error: 'MemberSkill is invalid' }, status: :bad_request
      rescue ActiveRecord::RecordNotSaved
        render json: { error: 'MemberSkill could not be saved' }, status: :internal_server_error
      end
    end
  end

  def destroy
    memeber_skill = MemberSkill.find_by_id( memeber_skill_params[:id] )

    if memeber_skill.nil?
      render json: { error: 'MemberSkill could not be found' }, status: :not_found
    else
      memeber_skill.status = INACTIVE

      begin
        memeber_skill.save!
        render json: memeber_skill.as_json, status: :ok
      rescue ActiveRecord::RecordNotSaved
        render json: { error: 'MemberSkill could not be deleted' }, status: :internal_server_error
      end
    end
  end

  private

  def memeber_skill_params
    @params.permit(
      :id, :cerner_id, :empi, :epic_mrn,
      :first_name, :middle_name, :last_name,
      :dob, :race, :sex, :status
    )
  end

  def memeber_skill_update_params
    @params.permit(
      :cerner_id, :epic_mrn,
      :first_name, :middle_name, :last_name, :dob, :race, :sex
    )
  end
end
