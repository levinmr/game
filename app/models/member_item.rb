class MemberItem < AbstractModel

  belongs_to :item_template
  belongs_to :party_member
end
