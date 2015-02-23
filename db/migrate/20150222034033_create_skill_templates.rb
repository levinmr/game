class CreateSkillTemplates < ActiveRecord::Migration
  def change
    create_table :skill_templates do |t|

      t.timestamps
    end
  end
end
