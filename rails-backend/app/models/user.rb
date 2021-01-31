class User < ApplicationRecord
    has_many :comments, through: :posts
    has_many :posts
    validates_presence_of :username
    validates_presence_of :email, unless :github_uid?

    def github_uid?
        github_uid != nil
    end

    # if github_uid == nil
    #     validates_presence_of :email
    # end
        
    has_secure_password
end
