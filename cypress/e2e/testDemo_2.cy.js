import { describe } from "mocha";
import Login from "./PageObject/login";
import LoginKO from "./PageObject/login";
import Prix from "./PageObject/prix_decroissant"; // Assurez-vous que l'importation est correcte
import prixDecroissant from "./PageObject/prix_decroissant";

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

// Nouveau cas de test pour trier les prix du plus cher au moins cher
    it("Trier les prix du plus cher au moins cher", function() {
    
    const prixDecroiss = new prixDecroissant();

    prixDecroiss.navigate();
    prixDecroiss.email('standard_user');
    prixDecroiss.password('secret_sauce');
    prixDecroiss.submit();
    cy.url().should('be.equal', 'https://www.saucedemo.com/v1/inventory.html')

    // Ajouter les étapes pour trier les prix ici
    prixDecroiss.sortByPriceDesc();
    // Ajouter les assertions pour vérifier que les prix sont triés correctement
    prixDecroiss.verifyPricesSortedDesc();

    })