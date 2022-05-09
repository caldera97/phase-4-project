class Post < ApplicationRecord
  belongs_to :user
  belongs_to :community
  has_many :likes 
  has_many :comments
end
