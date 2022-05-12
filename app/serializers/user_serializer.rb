class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :about, :posts
  has_many :posts
  has_many :comments
end
