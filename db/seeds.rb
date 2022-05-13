puts "Starting seeding"

puts "seeding communities"

Community.create(community_name: "Community 1", description: "This is the 1st community")

Community.create(community_name: "Community 2", description: "This is the 2nd community")

Community.create(community_name: "Community 3", description: "This is the 3rd community")

Community.create(community_name: "Community 4", description: "This is the 4th community")

puts "seeding users"

User.create(username: "user1", password_digest: BCrypt::Password.create('password'), about: "about")

User.create(username: "user2", password_digest: BCrypt::Password.create('password'), about: "about")

User.create(username: "user3", password_digest: BCrypt::Password.create('password'), about: "about")

User.create(username: "user4", password_digest: BCrypt::Password.create('password'), about: "about")

User.create(username: "user5", password_digest: BCrypt::Password.create('password'), about: "about")

User.create(username: "user6", password_digest: BCrypt::Password.create('password'), about: "about")

User.create(username: "user7", password_digest: BCrypt::Password.create('password'), about: "about")

User.create(username: "user8", password_digest: BCrypt::Password.create('password'), about: "about")

User.create(username: "user9", password_digest: BCrypt::Password.create('password'), about: "about")

User.create(username: "user10", password_digest: BCrypt::Password.create('password'), about: "about")

User.create(username: "user11", password_digest: BCrypt::Password.create('password'), about: "about")

User.create(username: "user12", password_digest: BCrypt::Password.create('password'), about: "about")

User.create(username: "user13", password_digest: BCrypt::Password.create('password'), about: "about")

User.create(username: "user14", password_digest: BCrypt::Password.create('password'), about: "about")

User.create(username: "user15", password_digest: BCrypt::Password.create('password'), about: "about")

puts "seeding posts"

50.times {Post.create(content: Faker::Lorem.paragraph, user_id: rand(User.count), community_id: rand(Community.count))}

puts "seeding likes"

30.times {Like.create(user_id: rand(User.count), post_id: rand(Post.count))}

puts "seeding comments"

60.times {Comment.create(content: Faker::Lorem.paragraph, user_id: rand(User.count), post_id: rand(Post.count))}

puts "seeding community joins"

30.times {CommunityRoster.create(user_id: rand(User.count), community_id: rand(Community.count))}