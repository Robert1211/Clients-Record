class CustomersController < ApplicationController
  def index
    @customers = @current_user.customers
  end

  def result
    @customers = @current_user.customers.search_for params[:query]
    render :index
  end

  def show
    @customer = Customer.find params[:id]
  end

  def edit
    @customer = Customer.find params[:id]
  end

  def update
    customer = Customer.find params[:id]
    customer.first_name = params[:customer][:first_name]
    customer.last_name = params[:customer][:last_name]
    customer.email = params[:customer][:email]
    customer.phone = params[:customer][:phone]
    customer.address = params[:customer][:address]
    customer.description = params[:customer][:description]
    customer.save
    @current_user.customers << customer
    redirect_to customer_path
  end


  def new
    @customer = Customer.new
  end

  def create
    customer = Customer.new
    customer.first_name = params[:customer][:first_name]
    customer.last_name = params[:customer][:last_name]
    customer.email = params[:customer][:email]
    customer.phone = params[:customer][:phone]
    customer.address = params[:customer][:address]
    customer.description = params[:customer][:description]
    customer.save
    @current_user.customers << customer
    redirect_to customers_path
  end




  def destroy
    customer = Customer.find params[:id]
    customer.destroy
    redirect_to customers_path
  end

end
