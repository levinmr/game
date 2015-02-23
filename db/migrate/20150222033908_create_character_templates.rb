class CreateCharacterTemplates < ActiveRecord::Migration
  def change
    create_table :character_templates do |t|

      t.timestamps
    end
  end
end
