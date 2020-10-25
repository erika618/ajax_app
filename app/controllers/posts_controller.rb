class PostsController < ApplicationController

 def index
   @posts = Post.all.order(id: "DESC")
   #新しいメモを一番上に。
 end

 def create
   Post.create(content: params[:content])
   redirect_to action: :index
 end

end