class CreateCommunities < ActiveRecord::Migration[6.1]
  def change
    create_table :communities do |t|
      t.string :community_name
      t.string :description

      t.timestamps
    end
  end
end
