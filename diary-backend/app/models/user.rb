class User < ApplicationRecord
  has_many :diaries, dependent: :destroy

  validates :open_id, presence: true, uniqueness: true
end
