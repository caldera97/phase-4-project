class AddUniqueIndexToCommunityRoster < ActiveRecord::Migration[6.1]
  def change
    add_index :community_rosters, [:user_id, :community_id], unique: true
  end
end
