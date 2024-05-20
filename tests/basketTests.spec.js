// @ts-check

const{test, expect} = require("@playwright/test");

test("Add Two  items to the Basket and verify in the basket", async function({page}){
    //Navigate to the Huel Home page
    await page.goto("https://huel.com/")

    //Click on search icon
    await page.getByTestId("IconLink-Search").click()
    
    // Type "Huel Daily Greens" into the search bar
    await page.getByTestId("SearchBar__input").fill("Huel Daily Greens");
    await page.getByTestId("SearchBar__submit-button").click();
    
    //Add first Item to basket
    await page.locator("(//div[@class='card-image']/a)[1]").click();
    await page.locator("(//div[@class='VariantsPurchaseForm__button-wrapper']/huel-button)").click();
    //click on continue to cart button
    await page.locator("(//button[@class='button is-success'])[1]").click();
    
    // Click on serach icon
    await page.getByTestId("IconLink-Search").click();
    
    //Type "The Huel Bestseller Bundle" into the search bar
    await page.getByTestId("SearchBar__input").fill("The Huel Bestseller Bundle");
    await page.getByTestId("SearchBar__submit-button").click();
    await page.locator("//div[@class='buttons']/a").click();
    
    //Add second Item to basket
    await page.locator("//label[@for='SubscriptionTarget']").click();
    
    
    //click on add to cart button for second item
    await page.locator("(//button[@class='button is-green'])[1]").click();
    
    // Verify that at least two items are present in the basket
    const cartItems = await page.locator("//var/span").textContent();
    expect(Number(cartItems)).toBeGreaterThan(1)

    


})


   
