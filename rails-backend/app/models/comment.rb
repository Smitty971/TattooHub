class Comment < ApplicationRecord
    belongs_to :posts
    validates :username, presence: true
    validate :description, presence: true
end
