class PostsController < ApplicationController

  def index
    @posts = Post.all.order(id: "DESC")
    #新しいメモを一番上に。
  end
  def create
    # メモ作成時に未読の情報を保存
    post = Post.create(content: params[:content], checked: false)
    render json:{ post: post }
    # redirect_to action: :index
  end
  def checked
    post = Post.find(params[:id])
    # URLパラメーターから既読したメモのidを見つける。
    if post.checked
      post.update(checked: false)
      #既読を解除するためにfalseへ変更
      # updateはActiveRecordのメソッド
    else
      post.update(checked: true)
      #既読にするためtrueに変更
    end
    item = Post.find(params[:id])
    #更新したレコードを取得し直す
    render json: { post: item }
    #JSON形式としてchecked.jsに返却。
  end

end