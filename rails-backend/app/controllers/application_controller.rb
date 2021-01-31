class ApplicationController < ActionController::API
    before_action :current_user, only: [:new, :edit, :delete, :create]
    before_action :require_login, only: [:new, :edit, :delete, :index]

    
end
