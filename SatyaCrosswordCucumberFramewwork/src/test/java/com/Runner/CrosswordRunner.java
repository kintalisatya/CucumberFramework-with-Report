package com.Runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/main/resources//feature//Testcase.feature",
		plugin = {"pretty", "html:reports/cucumber-html-report","json:reports/cucumber-html-report/jsonreport","com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html"},
		tags = {"@TC01_Register_and_Login_details,@TC02_Update_profile,@TC03_Search_for_the_books,@TC04_WindowHandle\r\n,@TC05_Scrolling"},
		glue = {"com.StepDefinition"},
		monochrome = true
		)

public class CrosswordRunner 
{
	@AfterClass
	  public static void extendReport()
	{
		Reporter.loadXMLConfig("src/test/resources/extent-config.xml");
	    Reporter.setSystemInfo("user", System.getProperty("user.name"));
	    Reporter.setSystemInfo("os", "Windows");
	    Reporter.setTestRunnerOutput("Sample test runner output message");
	}
}
