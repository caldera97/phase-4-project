class Post < ApplicationRecord
  belongs_to :user
  belongs_to :community
  has_many :likes 
  has_many :comments

  validates :user_id, :community_id, presence: true
end
