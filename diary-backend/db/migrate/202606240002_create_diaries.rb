class CreateDiaries < ActiveRecord::Migration[8.1]
  def change
    create_table :diaries do |t|
      t.references :user, null: false, foreign_key: { on_delete: :cascade }
      t.date :diary_date, null: false
      t.text :content, null: false, default: ""
      t.string :location, limit: 256
      t.float :latitude
      t.float :longitude
      t.datetime :deleted_at

      t.timestamps
    end

    add_index :diaries, %i[user_id diary_date], unique: true
    add_index :diaries, %i[user_id updated_at]
    add_index :diaries, :deleted_at
  end
end
