class ListSerializer
    include FastJsonapi:ObjectSerializer
    attributes :description, :username, :user, :id
end