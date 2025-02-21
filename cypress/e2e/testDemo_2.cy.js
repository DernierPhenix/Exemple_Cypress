import Login from "./PageObject/login";
import LoginKO from "./PageObject/login";

describe('cypress POM Test Suite', function () {
    it("Login avec un nom d'utilisateur et un mot de passe valide", function() {

    const loginpage = new Login();

    loginpage.navigate();
    loginpage.email('standard_user');
    loginpage.password('secret_sauce');
    loginpage.submit();
    cy.url().should('be.equal', 'https://www.saucedemo.com/v1/inventory.html')

    })
})

describe('cypress POM Test Suite', function () {
    it("Login avec un nom d'utilisateur invalide et un mot de passe valide", function() {

    const loginKo = new LoginKO();

    loginKo.navigate();
    loginKo.email('locked_out_user');
    loginKo.password('secret_sauce');
    loginKo.submit();
    cy.url().should('be.equal', 'https://www.saucedemo.com/v1/')

    })
})