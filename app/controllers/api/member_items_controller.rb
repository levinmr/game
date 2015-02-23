class Api::MemberItemsController < ApplicationController

  def index
    member_items = MemberItem.all

    if member_items.blank?
      render json: { error: 'MemberItem could not be found' }, status: :not_found
    else
      render json: member_items.as_json, status: :ok
    end
  end

  def create
    member_item = MemberItem.new( member_item_params )

    begin
      member_item.save!
      render json: member_item.as_json, status: :created
    rescue ActiveRecord::RecordInvalid
      render json: { error: 'MemberItem is invalid' }, status: :bad_request
    rescue ActiveRecord::RecordNotSaved
      render json: { error: 'MemberItem could not be saved' }, status: :internal_server_error
    end
  end

  def update
    member_item = MemberItem.find_by_id( member_item_params[:id] )

    if member_item.nil?
      render json: { error: 'MemberItem could not be found' }, status: :not_found
    else
      member_item.assign_attributes( member_item_update_params )

      begin
        member_item.save!
        render json: member_item.as_json, status: :ok
      rescue ActiveRecord::RecordInvalid
        render json: { error: 'MemberItem is invalid' }, status: :bad_request
      rescue ActiveRecord::RecordNotSaved
        render json: { error: 'MemberItem could not be saved' }, status: :internal_server_error
      end
    end
  end

  def destroy
    member_item = MemberItem.find_by_id( member_item_params[:id] )

    if member_item.nil?
      render json: { error: 'MemberItem could not be found' }, status: :not_found
    else
      member_item.status = INACTIVE

      begin
        member_item.save!
        render json: member_item.as_json, status: :ok
      rescue ActiveRecord::RecordNotSaved
        render json: { error: 'MemberItem could not be deleted' }, status: :internal_server_error
      end
    end
  end

  private

  def member_item_params
    @params.permit(
      :id, :cerner_id, :empi, :epic_mrn,
      :first_name, :middle_name, :last_name,
      :dob, :race, :sex, :status
    )
  end

  def member_item_update_params
    @params.permit(
      :cerner_id, :epic_mrn,
      :first_name, :middle_name, :last_name, :dob, :race, :sex
    )
  end
end
