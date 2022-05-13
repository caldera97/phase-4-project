class Community < ApplicationRecord
    has_many :community_rosters
    has_many :users, through: :community_rosters
    has_many :posts

    validates :description, :community_name, presence: true
    validates :community_name, uniqueness: true
end
