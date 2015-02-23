class Api::PartyMembersController < ApplicationController

  def index
    party_members = PartyMember.all

    if party_members.blank?
      render json: { error: 'PartyMember could not be found' }, status: :not_found
    else
      render json: party_members.as_json, status: :ok
    end
  end

  def create
    party_member = PartyMember.new( party_member_params )

    begin
      party_member.save!
      render json: party_member.as_json, status: :created
    rescue ActiveRecord::RecordInvalid
      render json: { error: 'PartyMember is invalid' }, status: :bad_request
    rescue ActiveRecord::RecordNotSaved
      render json: { error: 'PartyMember could not be saved' }, status: :internal_server_error
    end
  end

  def update
    party_member = PartyMember.find_by_id( party_member_params[:id] )

    if party_member.nil?
      render json: { error: 'PartyMember could not be found' }, status: :not_found
    else
      party_member.assign_attributes( party_member_update_params )

      begin
        party_member.save!
        render json: party_member.as_json, status: :ok
      rescue ActiveRecord::RecordInvalid
        render json: { error: 'PartyMember is invalid' }, status: :bad_request
      rescue ActiveRecord::RecordNotSaved
        render json: { error: 'PartyMember could not be saved' }, status: :internal_server_error
      end
    end
  end

  def destroy
    party_member = PartyMember.find_by_id( party_member_params[:id] )

    if party_member.nil?
      render json: { error: 'PartyMember could not be found' }, status: :not_found
    else
      party_member.status = INACTIVE

      begin
        party_member.save!
        render json: party_member.as_json, status: :ok
      rescue ActiveRecord::RecordNotSaved
        render json: { error: 'PartyMember could not be deleted' }, status: :internal_server_error
      end
    end
  end

  private

  def party_member_params
    @params.permit(
      :id, :cerner_id, :empi, :epic_mrn,
      :first_name, :middle_name, :last_name,
      :dob, :race, :sex, :status
    )
  end

  def party_member_update_params
    @params.permit(
      :cerner_id, :epic_mrn,
      :first_name, :middle_name, :last_name, :dob, :race, :sex
    )
  end
end
