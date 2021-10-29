@mobile
Feature: as a user of the system I want to valide at Initial Screen 
#This is the main screen when the app is opened for the first time, or when user is not loged in.

  @initialScreen @run
  Scenario: Validate Home Page screen 
    Given as user launch the app_
    When as user I want to see home screen is displayed
    Then as user I want to Checkmark an element
    
  @addSelectAndDelete 
  Scenario: Adition one Element in toods select and delete
    Given as user tap at the app
    When as user I want adittion one element from my list and called "Firts Interview Int" and validate the message "Todo created succesfully"
    Then as user I want delete one element of my list called "Firts Interview Int"

  @backToswich
  Scenario: Adition one Element in toods select and delete
    Given as user click at the app_
    When as user I want to go my list choice
    Then as user I want go back for the initial screen