Rails.application.routes.draw do
  get 'posts', to: 'posts#index'
  get 'posts/new', to: 'posts#new'
  post 'posts', to: 'posts#create'
end



# Rails.application.routes.draw do
#  [HTTPメソッド] '[URIパターン]', to: '[コントローラー名]#[アクション名]'
# end