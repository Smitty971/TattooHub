class PostSerializer
    include FastJsonapi:ObjectSerializer
    attributes :description, :artist, :user, :image_file_name, :image_content_type, :image_file_size
end