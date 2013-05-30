class Subject < ActiveRecord::Base

  validates :subject_name, :presence => true

  attr_accessible :subject_name

  # has_many :tools

  before_save :titlecase
	
  private

	def titlecase
	  self.subject_name = self.subject_name.titleize
	end
  
end