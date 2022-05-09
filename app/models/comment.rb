class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :post

  validates :post_id, presence: true
  
end
