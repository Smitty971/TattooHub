class Post < ApplicationRecord
    belongs_to :user
    has_many :comments, dependent: :destroy 
    has_many :users, through: :comments
    has_attached_file :image
    validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png"]
    scope :ordered, -> { order('created_at DESC') }
end
