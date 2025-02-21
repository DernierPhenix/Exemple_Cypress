//Création d'un Objet : 
class Login{
    navigate() {
        cy.visit('https://www.saucedemo.com/v1/')
    }
    email(username) {
        cy.get('#user-name')
            // .clear()
            .type(username)
        return this
    }
    password(password) {
        cy.get('#password')
        // .clear()
        .type(password)
        return this
    }
    submit() {
        cy.get('#login-button').click()
    }
}

class LoginKo{
    navigate() {
        cy.visit('https://www.saucedemo.com/v1/')
    }
    email(username) {
        cy.get('#user-name')
            // .clear()
            .type(username)
        return this
    }
    password(password) {
        cy.get('#password')
        // .clear()
        .type(password)
        return this
    }
    submit() {
        cy.get('#login-button').click()
    }
}
export default Login; LoginKo //on exporte l'objet pour le rendre importable 