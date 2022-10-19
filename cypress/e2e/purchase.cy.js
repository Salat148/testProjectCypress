import MainPage from "../pages/mainPage";
import NewArrivalsPage from "../pages/newArrivalsPage";
import PurchasePage from "../pages/purchasePage";

describe("empty spec", () => {
  beforeEach(function () {
    cy.visit("https://demo.vercel.store/");
  });

  it("Verify purchase", () => {
    MainPage.acceptCookies();
    MainPage.clickToButtonWithText("New Arrivals");
    NewArrivalsPage.checkProductCardsIsVisible();
    MainPage.clickOnTheProduct("ACME Cup");
    MainPage.clickToButtonWithText("Add To Cart");
    NewArrivalsPage.increaseQuantityByValue(5);
    NewArrivalsPage.checkPriceForQuantityOfProduct(5);
    MainPage.clickToButtonWithText("Close");
    MainPage.clickToButtonWithText("Featured");
    MainPage.clickOnTheProduct("Quarter Zip");
    MainPage.clickOnTheProduct("size m");
    MainPage.clickToButtonWithText("Add To Cart");
    NewArrivalsPage.addedItemsInCartExist("Quarter Zip");
    NewArrivalsPage.addedItemsInCartExist("ACME Cup");
    NewArrivalsPage.checkSizeInCart("M");
    NewArrivalsPage.checkPriceForQuantityOfProductInCart(5);
    MainPage.clickToButtonWithText("Proceed to Checkout");
    PurchasePage.fillPurchaseForm();
    //Impossible to proceed because Cypress does not allow you to navigate to a different origin URL within a single test.
  });
});
