class Api::PartiesController < ApplicationController

  def index
    parties = Party.all

    if parties.blank?
      render json: { error: 'Party could not be found' }, status: :not_found
    else
      render json: parties.as_json, status: :ok
    end
  end

  def create
    party = Party.new( party_params )

    begin
      party.save!
      render json: party.as_json, status: :created
    rescue ActiveRecord::RecordInvalid
      render json: { error: 'Party is invalid' }, status: :bad_request
    rescue ActiveRecord::RecordNotSaved
      render json: { error: 'Party could not be saved' }, status: :internal_server_error
    end
  end

  def update
    party = Party.find_by_id( party_params[:id] )

    if party.nil?
      render json: { error: 'Party could not be found' }, status: :not_found
    else
      party.assign_attributes( party_update_params )

      begin
        party.save!
        render json: party.as_json, status: :ok
      rescue ActiveRecord::RecordInvalid
        render json: { error: 'Party is invalid' }, status: :bad_request
      rescue ActiveRecord::RecordNotSaved
        render json: { error: 'Party could not be saved' }, status: :internal_server_error
      end
    end
  end

  def destroy
    party = Party.find_by_id( party_params[:id] )

    if party.nil?
      render json: { error: 'Party could not be found' }, status: :not_found
    else
      party.status = INACTIVE

      begin
        party.save!
        render json: party.as_json, status: :ok
      rescue ActiveRecord::RecordNotSaved
        render json: { error: 'Party could not be deleted' }, status: :internal_server_error
      end
    end
  end

  private

  def party_params
    @params.permit(
      :id, :cerner_id, :empi, :epic_mrn,
      :first_name, :middle_name, :last_name,
      :dob, :race, :sex, :status
    )
  end

  def party_update_params
    @params.permit(
      :cerner_id, :epic_mrn,
      :first_name, :middle_name, :last_name, :dob, :race, :sex
    )
  end
end
