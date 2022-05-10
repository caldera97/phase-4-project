class CommunitiesController < ApplicationController
    def index 
        render json: Community.all
    end

    def show 
        community = Community.find(params[:id])
        render json: community.posts
    end
end
