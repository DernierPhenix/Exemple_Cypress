const { describe } = require("mocha")
 
describe('template spec', () => {
  it('passes', () => {
    cy.visit('/') //=> Va chercher l'URL copiée dans le fichier cypress.config.js
  })
})

// describe('Test Suite', () => {

//     beforeEach(() => {
//         cy.log('Je fais cela avant chaque test dans chaque fichier spec !!!')
//         cy.visit('/')
//         // cy.get("#cookieChoiceDismiss").click()
//     });
  
//     it('Test First name', () => {
    
//         let firstname = "standard_user" //let appelle une variable qui peut être modifiée, Pareil pour le var. pour le const elle n'est pas modifiable
//         var lastname = "secret_sauce"
//         // cy.visit('/')
//         cy.get('#user-name').type(firstname)
//         // cy.wait(15000)
//         cy.get('#password').type(lastname)

//         cy.get('#login-button').click()
//     });

//     it('Tri par prix décroissant', () => {
//         // Accédez à la page contenant le select box
            
        
//         // Sélectionner une option par la valeur
//         cy.get('select[class="product_sort_container"]').select('hilo'); // Sélectionne "Banane"
//     });
    
// })

describe('template spec', () => {


  let emailKo, emailOk, password, firstname, lastname, cp


  beforeEach(() => {
    cy.visit('/');

    emailKo = 'locked_out_user'
    emailOk = 'standard_user'
    password = 'secret_sauce'
    firstname = "Jean-Pierre"
    lastname = "FLEURY"
    cp = "59290"
    
  });

  it('ConnexKo', () => {

    cy.get('#user-name').type(emailKo)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
  
  })
  
  it('Connex_reset', () => {
    // cy.contains('Sorry, this user has been locked out.')
    cy.get('#user-name').clear()
    cy.get('#password').clear()
  })

  it('ConnexOk', () => {
    cy.get('#user-name').type(emailOk)
    cy.get('#password').type(password)
    cy.get('#login-button').click()

  })

  it('ConnexOk', () => {

    //Renseigner le login et MdP et cliquer pour se connecter
    cy.get('#user-name').type(emailOk)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
    
    //Trier les éléments du + cher au - cher
    cy.get('select[class="product_sort_container"]').select('hilo')
    
    //Sélectionner les 2 premiers éléments du tableau. Attention : L'index est recalculé qd on sélectionne le 1er élément
    cy.get('.btn_primary.btn_inventory').eq(0).click();
    cy.get('.btn_primary.btn_inventory').eq(0).click();
    
    //Cliquer sur le panier
    cy.get('#shopping_cart_container').click()
    
    //Cliquer sur CHECKOUT
    cy.get('.btn_action.checkout_button').click()
  
    //Renseigner les champs
    cy.get('#first-name').type(firstname)
    cy.get('#last-name').type(lastname)
    cy.get('#postal-code').type(cp)
    cy.get('.btn_primary.cart_button').click()

    //Finir la commande en cliquant sur le bouton "FINISH"
    cy.get('.btn_action.cart_button').click()

    
      // Visite l'URL spécifique
    cy.visit('https://www.saucedemo.com/v1/checkout-complete.html');
      
      // Vérifie que l'URL correspond bien à celle attendue
    cy.url().should('eq', 'https://www.saucedemo.com/v1/checkout-complete.html');
      
      // Vérifie que le texte spécifique est présent sur la page
    cy.contains('THANK YOU FOR YOUR ORDER')
      .should('be.visible') // Vérifie que le texte est bien visible
      
        cy.log('Je suis sur la bonne page de checkout avec le texte attendu !');
      })

 
});
    
//---------------------------------------------------------------------------------------------

// VERSION REFACTORISÉE

// describe('Test Suite de Saucedemo', () => {

//   let emailKo, emailOk, password, firstname, lastname, cp;

//   // Fonction pour se connecter avec un utilisateur donné
//   const login = (email, password) => {
//     cy.get('#user-name').type(email);
//     cy.get('#password').type(password);
//     cy.get('#login-button').click();
//   };

//   // Fonction pour remplir le formulaire de commande
//   const fillCheckoutForm = (firstname, lastname, cp) => {
//     cy.get('#first-name').type(firstname);
//     cy.get('#last-name').type(lastname);
//     cy.get('#postal-code').type(cp);
//     cy.get('.btn_primary.cart_button').click();
//   };

//   // Fonction pour finaliser la commande
//   const completeOrder = () => {
//     cy.get('.btn_action.cart_button').click();
//     cy.url().should('eq', 'https://www.saucedemo.com/v1/checkout-complete.html');
//     cy.contains('THANK YOU FOR YOUR ORDER').should('be.visible');
//     cy.log('Commande terminée avec succès !');
//   };

//   beforeEach(() => {
//     cy.visit('/');  // Visite la page avant chaque test

//     // Initialisation des variables communes
//     emailKo = 'locked_out_user';
//     emailOk = 'standard_user';
//     password = 'secret_sauce';
//     firstname = "Jean-Pierre";
//     lastname = "FLEURY";
//     cp = "59290";
//   });

//   it('Connexion échouée (utilisateur verrouillé)', () => {
//     login(emailKo, password);  // Utilisation de la fonction de connexion
//     cy.contains('Sorry, this user has been locked out.')
//       .should('be.visible');
//   });

//   it('Réinitialisation des champs de connexion', () => {
//     cy.get('#user-name').clear();
//     cy.get('#password').clear();
//   });

//   it('Connexion réussie (utilisateur standard)', () => {
//     login(emailOk, password);  // Utilisation de la fonction de connexion
//     cy.url().should('include', 'inventory.html');
//   });

//   it('Processus de commande et validation de la page de confirmation', () => {
//     login(emailOk, password);  // Utilisation de la fonction de connexion
    
//     // Tri des produits du plus cher au moins cher
//     cy.get('select[class="product_sort_container"]').select('hilo');
    
//     // Sélectionner deux produits
//     cy.get('.btn_primary.btn_inventory').eq(0).click();
//     cy.get('.btn_primary.btn_inventory').eq(0).click();
    
//     // Aller au panier
//     cy.get('#shopping_cart_container').click();
    
//     // Cliquer sur CHECKOUT
//     cy.get('.btn_action.checkout_button').click();
    
//     // Remplir le formulaire de commande
//     fillCheckoutForm(firstname, lastname, cp);  // Utilisation de la fonction pour remplir le formulaire
    
//     // Finaliser la commande
//     completeOrder();  // Utilisation de la fonction pour finaliser la commande
//   });

// });



