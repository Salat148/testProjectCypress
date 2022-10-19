const newArrivalsButton = '[href="/search/clothes"]';
const acceptCookies = ".FeatureBar_root___INU8 > .Button_root__G_l9X";

class MainPage {
  static clickOnNewArrivalsButton() {
    cy.get(newArrivalsButton).click();
  }

  static clickToButtonWithText(name) {
    cy.contains(name).click({ force: true });
  }
  static acceptCookies() {
    cy.get(acceptCookies).click();
  }

  static clickOnTheProduct(productName) {
    cy.get(`[aria-label="${productName}"]`).click();
  }
}

export default MainPage;
