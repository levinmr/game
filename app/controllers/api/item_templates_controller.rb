class Api::ItemTemplatesController < ApplicationController

  def index
    item_templates = ItemTemplate.all

    if item_templates.blank?
      render json: { error: 'ItemTemplate could not be found' }, status: :not_found
    else
      render json: item_templates.as_json, status: :ok
    end
  end

  def create
    item_template = ItemTemplate.new( item_template_params )

    begin
      item_template.save!
      render json: item_template.as_json, status: :created
    rescue ActiveRecord::RecordInvalid
      render json: { error: 'ItemTemplate is invalid' }, status: :bad_request
    rescue ActiveRecord::RecordNotSaved
      render json: { error: 'ItemTemplate could not be saved' }, status: :internal_server_error
    end
  end

  def update
    item_template = ItemTemplate.find_by_id( item_template_params[:id] )

    if item_template.nil?
      render json: { error: 'ItemTemplate could not be found' }, status: :not_found
    else
      item_template.assign_attributes( item_template_update_params )

      begin
        item_template.save!
        render json: item_template.as_json, status: :ok
      rescue ActiveRecord::RecordInvalid
        render json: { error: 'ItemTemplate is invalid' }, status: :bad_request
      rescue ActiveRecord::RecordNotSaved
        render json: { error: 'ItemTemplate could not be saved' }, status: :internal_server_error
      end
    end
  end

  def destroy
    item_template = ItemTemplate.find_by_id( item_template_params[:id] )

    if item_template.nil?
      render json: { error: 'ItemTemplate could not be found' }, status: :not_found
    else
      item_template.status = INACTIVE

      begin
        item_template.save!
        render json: item_template.as_json, status: :ok
      rescue ActiveRecord::RecordNotSaved
        render json: { error: 'ItemTemplate could not be deleted' }, status: :internal_server_error
      end
    end
  end

  private

  def item_template_params
    @params.permit(
      :id, :cerner_id, :empi, :epic_mrn,
      :first_name, :middle_name, :last_name,
      :dob, :race, :sex, :status
    )
  end

  def item_template_update_params
    @params.permit(
      :cerner_id, :epic_mrn,
      :first_name, :middle_name, :last_name, :dob, :race, :sex
    )
  end
end
