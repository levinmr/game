class CreateMemberItems < ActiveRecord::Migration
  def change
    create_table :member_items do |t|
      t.belongs_to :item_template
      t.belongs_to :party_member
      t.timestamps
    end
  end
end
