#name :string
#email :srting
#password_digest :string
class User < ApplicationRecord
  has_secure_password   #this check password validates
  validates :name, :presence => true
  validates :email, :presence =>true

end
