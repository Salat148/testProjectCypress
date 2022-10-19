const productCards = "[class*='ProductCard_root']";
const quantityButton = "[class*='Quantity_actions']";
const productPrice = "[class*='ProductTag_price']";
const totalPrice = "[class*='SidebarLayout'] [class*='justify-between']";
const cartItem = "[class*='CartItem_productName']";
const sizeInCart = ":nth-child(2) > .mx-2";
const allProductsInCart = "[class*=CartSidebarView]";

class NewArrivalsPage {
  static checkProductCardsIsVisible() {
    cy.get(productCards).should("exist");
  }

  static increaseQuantityByValue(value) {
    for (let i = 0; i < value - 1; i++) {
      cy.get(quantityButton).last().click({ force: true });
    }
  }

  static checkPriceForQuantityOfProduct(value) {
    cy.get(productPrice).then(($price) => {
      let txt = parseFloat($price.text().replace("$", "")).toFixed(2);
      txt *= value;
      cy.get(totalPrice).first().contains(txt.toFixed(2));
    });
  }

  static checkPriceForQuantityOfProductInCart() {
    cy.get(allProductsInCart)
      .invoke("text")
      .then((text) => {
        text = text
          .replace(/[^\d. -]/g, "")
          .slice(1)
          .split(" ");
        let parsed = text.map(parseFloat);
        const sum = parsed.reduce((partialSum, a) => partialSum + a, 0);
        cy.log(sum.toFixed(2));
        cy.get(totalPrice).contains(sum.toFixed(2));
      });
  }

  static addedItemsInCartExist(name) {
    cy.get(cartItem).contains(name);
  }

  static checkSizeInCart(size) {
    cy.get(sizeInCart).contains(size);
  }
}

export default NewArrivalsPage;
