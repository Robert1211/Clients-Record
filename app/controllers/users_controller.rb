class UsersController < ApplicationController
 before_action :check_for_admin, :only => [:index]
  def index
    @users = User.all
  end

  def new
    @user = User.new
  end



  def create
    @user = User.new(user_params)
    respond_to do |format|
    if @user.save
    session[:user_id] = @user.id
    format.html {redirect_to root_path, notice: 'User was successfully created.'}
    format.json { render show, status: :created, location: @user }
    else
      format.html { render :new }
      format.json { render json: @user.errors, status: :unprocessable_entity }
    end
   end
 end
 private
 def user_params
   params.require(:user).permit(:name, :email, :password, :password_confirmation)
 end
end
