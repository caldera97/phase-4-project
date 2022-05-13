class Post < ApplicationRecord
  belongs_to :user
  belongs_to :community
  has_many :likes, dependent: :destroy
  has_many :comments, dependent: :destroy

  validates :user_id, :community_id, presence: true
end
