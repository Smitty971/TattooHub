class PostsController < ApplicationController

    def index
        render :json => Posts.all, include => :comment
    end
end
