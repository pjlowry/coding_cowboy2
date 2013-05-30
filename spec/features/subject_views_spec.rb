require 'spec_helper'

feature Subject do
  scenario 'add subject' do
    visit new_subject_path
    fill_in 'Subject', :with => 'HTML/CSS'
    click_button "Add"
    page.should have_content 'created'
  end

  scenario 'invalid input' do 
    visit new_subject_path
    fill_in 'Subject', :with => ''
    click_button "Add"
    page.should have_content "Subject can't be blank"
  end

  scenario 'show tools by subject' do
    create_subject_and_type
    visit subjects_path
    click_on "Rails"
    page.should have_content 'Subject: Rails'
  end    
end
