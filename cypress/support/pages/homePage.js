const locator = require('../locator/homePageLocator');

class wikiHome{
    async visit(path){
        cy.visit(path)
    }

    async search(searchInput){
        cy.get(locator.homeMenu.searchBar).type(searchInput)
    }

    async submit(){
        cy.get(locator.homeMenu.submitButton).click()
    }

    async suggestDropdown(suggest){
        cy.get(locator.homeMenu.suggestionDropdown)
        .should('be.visible').and('contain.text',suggest)
    }

    async changeIndonesianLanguage(bahasa){
        cy.get(locator.homeMenu.chooseLang).select(bahasa);
        
    }

    async validateIndonesian(bahasa){
        cy.get(locator.homeMenu.firstHeading).contains(bahasa)
    }
    
}

module.exports= wikiHome;