class CreatePartyMembers < ActiveRecord::Migration
  def change
    create_table :party_members do |t|
      t.belongs_to :party
      t.belongs_to :character_template
      t.timestamps
    end
  end
end
