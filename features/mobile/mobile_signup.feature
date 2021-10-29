@mobile 
Feature: Signup
This is the main screen when the app is opened for the first time, or when user is not loged in.

  
  Scenario: Signup Screen Element Validation 
    Given a user is on the initial screen
    When Tap the signup buton
    Then Signup title is displayed with text "Sign Up" in the signup screen
    And Back button is displayed in the signup screen
    And Mobile phone number label is displayed with text "Mobile phone number" in the signup screen
    And Flag icon is displayed in the signup screen
    And Mobile phone number input is displayed in the signup screen
    # And Start button is displayed in with text "START" in the signup screen
    # And Terms and condition title is dislplayed with text "Terms & Conditions" in the signup screen
    # And Terms and condition description is displayed with text "By Submitting your phone number you agree to our Terms & Conditions and the rest of the legalese..."
