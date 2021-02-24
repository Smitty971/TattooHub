class PostsController < ApplicationController

    def index
        render :json => Post.all
    end
end
# This codes goes on line 4 after the Post.all
# , :include => :comment