Rails.application.routes.draw do
  
  resources :community_rosters
  resources :communities
  resources :likes
  resources :comments
  resources :posts
  resources :users

  get "/posts/:id/comments", to: "posts#index_comments"

  get "/users/:id/posts", to: "users#index_posts"

  


  # Routing logic: fallback requests for React Router.vvvv
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  # Leave this here to help deploy your app later!^^^^



  get "/me", to: "users#show" #make useEffect in app to fetch here to see if logged in
  post "/signup", to: "users#create"
  post '/login', to:  'sessions#create' 
  delete '/logout', to:  'sessions#destroy'
end
