class PostsController < ApplicationController
  def index #アクションを定義した
    # @post = Post.find(1)
    # #1番目のレコードを@postに代入（モデル名.find(レコードのid)
    @posts = Post.all
    # #全てのレコードを@postsに代入

    def new
    end

    def create
      Post.create(content: params[:content])
      #(カラム名.paramsとして送られてきたデータ)
    end

  end
end
