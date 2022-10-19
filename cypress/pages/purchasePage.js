const emailField = 'input[placeholder*="Email or mobile phone number"]';
const firstNameField = 'input[placeholder*="First name (optional)"]';
const lastNameField = 'input[placeholder*="Last name"]';
const addressField = 'input[placeholder*="Address"]';
const cityField = 'input[placeholder*="City"]';
const postalCodeField = 'input[placeholder*="Postal code"]';
const submitButton = "button[type='submit']";
const selectRadioButton = "//*[@class='radio__input']";

class PurchasePage {
  static fillPurchaseForm() {
    this.fillEmailField();
    this.fillFirstNameField();
    this.fillLastNameField();
    this.fillAddressField();
    this.fillCityField();
    this.fillPostalCodeField();
    this.submitPurchaseForm();
  }

  static fillEmailField() {
    cy.get(emailField).type(
      Math.random().toString(36).substring(2, 11) + "@domain.com"
    );
  }

  static fillAddressField() {
    cy.get(addressField).type(Math.random().toString(36).substring(2, 11));
  }

  static fillLastNameField() {
    cy.get(lastNameField).type(Math.random().toString(36).substring(2, 11));
  }

  static fillFirstNameField() {
    cy.get(firstNameField).type(Math.random().toString(36).substring(2, 11));
  }

  static fillCityField() {
    cy.get(cityField).type(Math.random().toString(36).substring(2, 11));
  }

  static fillPostalCodeField() {
    cy.get(postalCodeField).type(Math.random().toString(36).substring(2, 11));
  }

  static submitPurchaseForm() {
    cy.get(submitButton).click();
  }

  static clickToButtonWithText(name) {
    cy.contains(name).click({ force: true });
  }

  static selectSecondRadioButton() {
    cy.get(selectRadioButton).eq(1).click({ force: true });
  }
}

export default PurchasePage;
