class CommunitiesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_community_not_found
    def index 
        render json: Community.all
    end

    def show 
        community = find_community
        render json: community.posts
    end

    private 

    def find_community
        Community.find(params[:id])
    end

    def render_community_not_found
        render json: {error: "Community not found"}, status: :not_found
    end
end
