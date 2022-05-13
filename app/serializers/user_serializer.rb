class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :about
  has_many :posts
  has_many :comments
  has_many :communities, through: :community_rosters
end
