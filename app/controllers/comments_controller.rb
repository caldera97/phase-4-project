class CommentsController < ApplicationController

  def index 
    render json: Comment.all
end

end
