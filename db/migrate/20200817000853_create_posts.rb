class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t| #実際にpostsテーブルを作成する
      t.text :content
      t.timestamps
    end
  end
end
