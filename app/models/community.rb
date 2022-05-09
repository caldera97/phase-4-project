class Community < ApplicationRecord
    has_many :users 
    has_many :posts

    validates :description, :community_name, presence: true
    validates :community_name, uniqueness: true
end
