class CreateMemberSkills < ActiveRecord::Migration
  def change
    create_table :member_skills do |t|
      t.belongs_to :skill_template
      t.belongs_to :party_member
      t.timestamps
    end
  end
end
