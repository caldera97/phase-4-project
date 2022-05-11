class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :user
  belongs_to :user
  belongs_to :community
end
