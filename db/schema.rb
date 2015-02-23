# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150222034045) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "character_templates", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "item_templates", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "member_items", force: true do |t|
    t.integer  "item_template_id"
    t.integer  "party_member_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "member_skills", force: true do |t|
    t.integer  "skill_template_id"
    t.integer  "party_member_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "parties", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "party_members", force: true do |t|
    t.integer  "party_id"
    t.integer  "character_template_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "skill_templates", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
