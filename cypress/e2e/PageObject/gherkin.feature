Feature : Ajouter un article au panier et valider le paiement

     Scenario: aller sur le site de automationexercice 
        Given j'ouvre mon navigateur
        When je vais sur le site de https: //automationexercice.com
        Then je suis sur la page d'accueil de automationexercice

    Scenario: Ajouter le premier article au panier
        Given je veux ajouter le 1er article au panier
        When je survole l'article avec ma souris
        Then une fenêtre de couleur orange s'affiche
        When je clique sur le bouton "Add to cart"
        Then l'article est ajouté au panier et une pop-up "Added" s'affiche

    Scenario: aller au panier depuis la Popup
        Given je veux aller au panier
        When je clique sur le lien "View cart"
        Then je suis redirigé vers la page du panier

    Scenario: valider le panier 
        Given je veux valider mon panier
        When je clique sur le bouton "Checkout"
        Then une popup "register" apparaît à l'écran

    Scenario: s'enregistrer sur le site
        Given je veux m'enregistrer sur le site
        When je clique sur le bouton "Register / Login"
        Then je suis redirigé vers la page pour me connecter ou créer un nouveau compte

    Scenario: Créer un nouveau compte
        Given je veux créer un nouveau compte
        When je renseigne mon nom et mon email dans les champs prévus sous "New User Signup"
        And je clique sur le bouton "signup"
        Then je suis redirigé vers la page https://automationexercise.com/signup

    Scenario: remplir le formulaire avec mes informations personnelles
        Given je veux remplir le formulaire avec mes informations personnelles
        When je renseigne mon mot de passe, ma date de naissance, mon prénom, mon nom, mon adresse, mon code postal, ma ville, mon pays, mon numéro de téléphone
        And je clique sur le bouton "Create account"
        Then je suis redirigé vers la page https://automationexercise.com/account_created
        And je clique sur le bouton "Continue"
        Then je suis redirigé vers la page d'accueil

    Scenario: aller sur mon panier
        Given je veux aller sur mon panier
        When je clique sur le bouton "Cart"
        Then je suis redirigé vers la page de mon panier

    Scenario: valider mon panier
        Given je veux valider mon panier
        When je clique sur le bouton "Proceed To Checkout"
        Then je suis redirigé vers la page recapitulative de mon panier
        And je clique sur le bouton "Place Order"
        Then je suis redirigé vers la page de paiement

    Scenario: valider mon paiement
        Given je veux valider mon paiement
        When je renseigne mon numéro de carte, ma date d'expiration, mon code de sécurité
        And je clique sur le bouton "Pay and confirm Order"
        Then je suis redirigé vers la page de confirmation de paiement
