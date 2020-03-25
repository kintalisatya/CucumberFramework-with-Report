package com.StepDefinition;

import com.Pages.updateProfileCrossword_Page;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class updtaeProfileCrossword_Step {

	updateProfileCrossword_Page update = new updateProfileCrossword_Page();
	
	@Given("^User launch the Chrome Application$")
	public void user_launch_the_Chrome_Application() throws Throwable {
		update.Launch();
	}

	@When("^Open the crossword Home Page then Login to update$")
	public void open_the_crossword_Home_Page_then_Login_to_update() throws Throwable {
		update.WebPage();
	}

	@Then("^User update the profile details$")
	public void user_update_the_profile_details() throws Throwable {
		update.updatePro();
		update.screenshots("src/test/resources//Screenshot//update.png");
	}

	@Then("^Close The Browser after updating the profile$")
	public void close_The_Browser_after_updating_the_profile() throws Throwable {
		update.closeTab();
	}
}
