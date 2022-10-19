const sizeButton = "button[class*='Button_root']";

class FeaturedPage {
  static chooseSize(size) {
    cy.contains(sizeButton).should("have.text", size).click();
  }
}

export default FeaturedPage;
