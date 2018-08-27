require 'rails_helper'

RSpec.describe Customer, type: :model do
  it 'requires a first name' do
   customer = Customer.new(last_name: 'Biggles', email: 'robert@ga.co').save
   expect(customer).to eq(false)
  end
  it 'requires a last name' do
    customer = Customer.new(first_name: 'Robert', email: 'robert@ga.co').save
    expect(customer).to eq(false)
  end
  it 'requires a email' do
    customer = Customer.new(first_name: 'Robert', last_name: 'Macul').save
    expect(customer).to eq(false)
  end
  it 'requires a phone' do
    customer = Customer.new(first_name: 'Robert', last_name: 'Macul', email: 'robert@ga.co').save
    expect(customer).to eq(false)
  end
  it 'requires a address' do
    customer = Customer.new(first_name: 'Robert', last_name: 'Macul', email: 'robert@ga.co', phone: '1234').save
    expect(customer).to eq(false)
  end
  it 'requires a description' do
    customer = Customer.new(first_name: 'Robert', last_name: 'Macul', email: 'robert@ga.co', phone: '1234', address: 'Sydney').save
    expect(customer).to eq(false)
  end
  
end
