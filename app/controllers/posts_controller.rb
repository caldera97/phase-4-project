class PostsController < ApplicationController
    def index_comments
        post = Post.find(params[:id])
        render json: post.comments
    end

    def show
        post = Post.find(params[:id])
        render json: post
    end

    def update
        post = Post.find(params[:id])
        post.update(post_params)
        render json: post
    end

    def create
        post = Post.create(post_params)
        render json: post, status: :created
    end

    def destroy
        post = Post.find(params[:id])
        post.destroy
        head :no_content
    end

    private

    def post_params
        params.permit[:user_id, :community_id, :content]
    end
end
