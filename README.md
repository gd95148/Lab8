# Lab8
# Gourab Dastider A15817532


## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)
   1) within a github action that runs whenever code is pushed

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   I would not use a unit test to test the "message" feature of a messaging application as this message feature is essentially the main purpose of the application. Without this feature there is not much of an application left. Moreover, this messaging feature has many facets to test such as the input of text, the submission, and receiving of the message from the other user. The multitude of aspects to consider in the message feature makes a single unit test insufficent to test the feature. Unit tests are meant to encapsulate parts of code into small parts and debug on a small scale.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
   I would use a unit test to test the max message length, as we have specified a specific unit of the messaging application to test, the text entry. We are checking the max message length which gives us a specific metric to track if the unit test fails. This will allow to pinpoint an error to the message length.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
   If we were to run our puppeteer tests with the field "headless" set to true, we would be running our tests without a browser UI. We are running our tests with headless set to false so we can see how puppeteer drives the browser.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
   beforeAll(async () => {
    await page.goto('http://127.0.0.1:5500');
    await page.click('img[alt="settings"]')
    await page.waitForTimeout(500);
  });

