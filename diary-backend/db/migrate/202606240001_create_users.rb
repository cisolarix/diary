class CreateUsers < ActiveRecord::Migration[8.1]
  def change
    create_table :users do |t|
      t.string :open_id, null: false, limit: 64
      t.string :nick_name, limit: 64
      t.string :avatar_url, limit: 512

      t.timestamps
    end

    add_index :users, :open_id, unique: true
  end
end
