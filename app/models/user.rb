class User < ApplicationRecord
    has_secure_password
    
    has_many :community_rosters 
    has_many :communities, through: :community_rosters
    has_many :posts
    has_many :likes
    has_many :comments

    validates :username, uniqueness: true
end
