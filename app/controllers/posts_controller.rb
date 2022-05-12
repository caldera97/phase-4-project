class PostsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_post_not_found
    def index_comments
        post = find_post
        render json: post.comments
    end

    def index 
        render json: Post.all.reverse
    end

    def show
        post = find_post
        render json: post
    end

    def update
        post = find_post
        post.update(post_params)
        render json: post
    end

    def create
        post = Post.create(post_params)
        render json: post, status: :created
    end

    def destroy
        post = find_post
        post.destroy
        head :no_content
    end

    private

    def find_post
        Post.find(params[:id])
    end

    def post_params
        params.permit(:user_id, :community_id, :content)
    end

    def render_post_not_found
        render json: {error: "Post not found"}, status: :not_found
    end
end
