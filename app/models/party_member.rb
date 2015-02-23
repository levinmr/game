class PartyMember < AbstractModel

  belongs_to :party
  belongs_to :character_template

  has_many :member_items
  has_many :member_skills
end
