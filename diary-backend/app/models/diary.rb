class Diary < ApplicationRecord
  include Discard::Model

  belongs_to :user

  validates :diary_date, presence: true
  validates :diary_date, uniqueness: { scope: :user_id }
  validates :content, length: { maximum: 5000 }

  scope :active_by_user_since, ->(user, since) {
    kept.where(user: user).then { |r|
      since ? r.where("updated_at > ?", since) : r
    }.order(diary_date: :desc)
  }
end
