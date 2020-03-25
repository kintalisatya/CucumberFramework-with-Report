$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/Testcase.feature");
formatter.feature({
  "line": 2,
  "name": "Crossword Website",
  "description": "",
  "id": "crossword-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Crossword"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Check the user able to register and login with valid \u0026 invalid details",
  "description": "",
  "id": "crossword-website;check-the-user-able-to-register-and-login-with-valid-\u0026-invalid-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC01_Register_and_Login_details"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The User launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter the required details to register",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" with vaild and invaild deatils",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "crossword-website;check-the-user-able-to-register-and-login-with-valid-\u0026-invalid-details;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "crossword-website;check-the-user-able-to-register-and-login-with-valid-\u0026-invalid-details;;1"
    },
    {
      "cells": [
        "satyakinthali92@gmail.com",
        "Satya@123"
      ],
      "line": 14,
      "id": "crossword-website;check-the-user-able-to-register-and-login-with-valid-\u0026-invalid-details;;2"
    },
    {
      "cells": [
        "bro@gmail.com",
        "satya00"
      ],
      "line": 15,
      "id": "crossword-website;check-the-user-able-to-register-and-login-with-valid-\u0026-invalid-details;;3"
    },
    {
      "cells": [
        "sat@gmail.com",
        "bro123"
      ],
      "line": 16,
      "id": "crossword-website;check-the-user-able-to-register-and-login-with-valid-\u0026-invalid-details;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Check the user able to register and login with valid \u0026 invalid details",
  "description": "",
  "id": "crossword-website;check-the-user-able-to-register-and-login-with-valid-\u0026-invalid-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Crossword"
    },
    {
      "line": 4,
      "name": "@TC01_Register_and_Login_details"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The User launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter the required details to register",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"satyakinthali92@gmail.com\" and \"Satya@123\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterCrossword_Step.the_User_launch_the_Chrome_application()"
});
formatter.result({
  "duration": 21769986200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterCrossword_Step.enter_the_required_details_to_register()"
});
formatter.result({
  "duration": 4932121300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "satyakinthali92@gmail.com",
      "offset": 22
    },
    {
      "val": "Satya@123",
      "offset": 54
    }
  ],
  "location": "RegisterCrossword_Step.the_user_login_using_and_with_vaild_and_invaild_deatils(String,String)"
});
formatter.result({
  "duration": 5949754000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterCrossword_Step.close_the_browser()"
});
formatter.result({
  "duration": 1122964600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Check the user able to register and login with valid \u0026 invalid details",
  "description": "",
  "id": "crossword-website;check-the-user-able-to-register-and-login-with-valid-\u0026-invalid-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Crossword"
    },
    {
      "line": 4,
      "name": "@TC01_Register_and_Login_details"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The User launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter the required details to register",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"bro@gmail.com\" and \"satya00\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterCrossword_Step.the_User_launch_the_Chrome_application()"
});
formatter.result({
  "duration": 13581896800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterCrossword_Step.enter_the_required_details_to_register()"
});
formatter.result({
  "duration": 5767475300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bro@gmail.com",
      "offset": 22
    },
    {
      "val": "satya00",
      "offset": 42
    }
  ],
  "location": "RegisterCrossword_Step.the_user_login_using_and_with_vaild_and_invaild_deatils(String,String)"
});
formatter.result({
  "duration": 5665516800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterCrossword_Step.close_the_browser()"
});
formatter.result({
  "duration": 1189697000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Check the user able to register and login with valid \u0026 invalid details",
  "description": "",
  "id": "crossword-website;check-the-user-able-to-register-and-login-with-valid-\u0026-invalid-details;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Crossword"
    },
    {
      "line": 4,
      "name": "@TC01_Register_and_Login_details"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The User launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter the required details to register",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"sat@gmail.com\" and \"bro123\" with vaild and invaild deatils",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterCrossword_Step.the_User_launch_the_Chrome_application()"
});
formatter.result({
  "duration": 18105051200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterCrossword_Step.enter_the_required_details_to_register()"
});
formatter.result({
  "duration": 4493812000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sat@gmail.com",
      "offset": 22
    },
    {
      "val": "bro123",
      "offset": 42
    }
  ],
  "location": "RegisterCrossword_Step.the_user_login_using_and_with_vaild_and_invaild_deatils(String,String)"
});
formatter.result({
  "duration": 5678588800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterCrossword_Step.close_the_browser()"
});
formatter.result({
  "duration": 1137617700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Check the user to update profile",
  "description": "",
  "id": "crossword-website;check-the-user-to-update-profile",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@TC02_Update_profile"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User launch the Chrome Application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Open the crossword Home Page then Login to update",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User update the profile details",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Close The Browser after updating the profile",
  "keyword": "And "
});
formatter.match({
  "location": "updtaeProfileCrossword_Step.user_launch_the_Chrome_Application()"
});
formatter.result({
  "duration": 10047242300,
  "status": "passed"
});
formatter.match({
  "location": "updtaeProfileCrossword_Step.open_the_crossword_Home_Page_then_Login_to_update()"
});
formatter.result({
  "duration": 11595161400,
  "status": "passed"
});
formatter.match({
  "location": "updtaeProfileCrossword_Step.user_update_the_profile_details()"
});
formatter.result({
  "duration": 6103755900,
  "status": "passed"
});
formatter.match({
  "location": "updtaeProfileCrossword_Step.close_The_Browser_after_updating_the_profile()"
});
formatter.result({
  "duration": 5610719500,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Check user to search for books to add wishlist and delete wishlist",
  "description": "",
  "id": "crossword-website;check-user-to-search-for-books-to-add-wishlist-and-delete-wishlist",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@TC03_Search_for_the_books"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "Open the Crossword Home page and login to search",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User search for the books to add wishlist and delete wishlist",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Close the Browser after search",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCrossword_Step.user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 31866170500,
  "status": "passed"
});
formatter.match({
  "location": "SearchCrossword_Step.open_the_Crossword_Home_page_and_login_to_search()"
});
formatter.result({
  "duration": 4523493900,
  "status": "passed"
});
formatter.match({
  "location": "SearchCrossword_Step.user_search_for_the_books_to_add_wishlist_and_delete_wishlist()"
});
formatter.result({
  "duration": 14720294800,
  "status": "passed"
});
formatter.match({
  "location": "SearchCrossword_Step.close_the_Browser_after_search()"
});
formatter.result({
  "duration": 9465507000,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Check the user to handle window",
  "description": "",
  "id": "crossword-website;check-the-user-to-handle-window",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@TC04_WindowHandle"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "User Launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "Open the Crossword Home page and Login to handle window",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User view window handling operarion",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "close the Browser after window handle",
  "keyword": "And "
});
formatter.match({
  "location": "WindowCrossword_Step.user_Launch_the_Chrome_application()"
});
formatter.result({
  "duration": 12377768600,
  "status": "passed"
});
formatter.match({
  "location": "WindowCrossword_Step.open_the_Crossword_Home_page_and_Login_to_handle_window()"
});
formatter.result({
  "duration": 8674481000,
  "status": "passed"
});
formatter.match({
  "location": "WindowCrossword_Step.user_view_window_handling_operarion()"
});
formatter.result({
  "duration": 11111508200,
  "status": "passed"
});
formatter.match({
  "location": "WindowCrossword_Step.close_the_Browser_after_window_handle()"
});
formatter.result({
  "duration": 53800,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Check the user to handle scroll",
  "description": "",
  "id": "crossword-website;check-the-user-to-handle-scroll",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@TC05_Scrolling"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "User Launch the Chrome Application",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "Open the Crossword Home Page and Login to scroll",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "User scroll the page",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "close the browser after scrolling operation",
  "keyword": "And "
});
formatter.match({
  "location": "ScrollingCrossword_Step.user_Launch_the_Chrome_Application()"
});
formatter.result({
  "duration": 13198956300,
  "status": "passed"
});
formatter.match({
  "location": "ScrollingCrossword_Step.open_the_Crossword_Home_Page_and_Login_to_scroll()"
});
formatter.result({
  "duration": 10942944000,
  "status": "passed"
});
formatter.match({
  "location": "ScrollingCrossword_Step.user_scroll_the_page()"
});
formatter.result({
  "duration": 4801046700,
  "status": "passed"
});
formatter.match({
  "location": "ScrollingCrossword_Step.close_the_browser_after_scrolling_operation()"
});
formatter.result({
  "duration": 11495630200,
  "status": "passed"
});
});