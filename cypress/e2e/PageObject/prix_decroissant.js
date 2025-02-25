class prixDecroissant {
    constructor() {
        // Sélecteur pour le menu déroulant de tri
        this.menuDeroulantTri = '.product_sort_container';
        // Sélecteur pour les éléments de l'inventaire
        this.elementsInventaire = '.inventory_item';
        // Sélecteur pour les prix des éléments de l'inventaire
        this.prixElementInventaire = '.inventory_item_price';
    }

    // Méthode pour visiter la page d'inventaire
    navigate() {
        cy.visit('https://www.saucedemo.com/v1/inventory.html');
    }

    // Méthode pour trier les éléments par prix décroissant
    trierParPrixDecroissant() {
        cy.get(this.menuDeroulantTri).select('Price (high to low)');
    }

    // Méthode pour obtenir les prix des éléments de l'inventaire
    obtenirPrix() {
        return cy.get(this.prixElementInventaire).then($prix => {
            // Convertir les prix en nombres flottants après avoir retiré le symbole '$'
            return Cypress._.map($prix, prix => parseFloat(prix.innerText.replace('$', '')));
        });
    }

    // Méthode pour vérifier que les prix sont triés par ordre décroissant
    verifierPrixTriesDecroissant() {
        this.obtenirPrix().then(prix => {
            // Trier les prix en ordre décroissant
            const prixTries = Cypress._.orderBy(prix, [], ['desc']);
            // Vérifier que les prix obtenus sont égaux aux prix triés
            expect(prix).to.deep.equal(prixTries);
        });
    }
}

export default prixDecroissant; // Exporter l'objet pour le rendre importable