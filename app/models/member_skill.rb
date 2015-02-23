class MemberSkill < AbstractModel

  belongs_to :skill_template
  belongs_to :party_member
end
