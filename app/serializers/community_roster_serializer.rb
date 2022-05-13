class CommunityRosterSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :community
end
