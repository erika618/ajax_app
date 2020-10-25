class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t| #実際にpostsテーブルを作成する
      t.text :content
      t.boolean :checked
      #真理値。既読か未読かで使用。
      t.timestamps
    end
  end
end
