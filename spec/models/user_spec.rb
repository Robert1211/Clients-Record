require 'rails_helper'

RSpec.describe User, type: :model do
  it 'requires a name' do
    user = User.new(email: 'sample@example.com', password: 'chicken').save
    expect(user).to eq(false)
  end
  it 'requires a email' do
    user = User.new(name: 'robert', password: 'chicken').save
    expect(user).to eq(false)
  end
  it 'requires a password' do
    user = User.new(name: 'robert', email: 'sample@example.com').save
    expect(user).to eq(false)
  end
  it 'requires a name, email, password' do
    user = User.new(name: 'robert', email: 'simple@example.com', password: 'chicken').save
    expect(user).to eq(true)
  end
end
