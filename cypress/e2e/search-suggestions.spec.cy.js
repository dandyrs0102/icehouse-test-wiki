const wikiHome = require('../support/pages/homePage');
let wikisearch = new wikiHome();

describe('Verify Search Suggestions', () => {
  const suggestionText = "test automation";
  const bahasa = "Bahasa Indonesia";
  const textIndo = "Aku Cinta"

  beforeEach(function(){
    //go to wikipedia org
    wikisearch.visit('/');
  })


  it('User is able to see search suggestions list', () => {
    //type keyword on the search field
    wikisearch.search(suggestionText);

    //Verify that are suggestion list are displayed correctly
    wikisearch.suggestDropdown(suggestionText);
  });

  it('User is able to choose a language to ID ', () => {
    //select ID as language
    wikisearch.changeIndonesianLanguage(bahasa);
    //type keyword on search field
    wikisearch.search(textIndo);
    //verify that the suggestion list are displayed in indonesian language
    wikisearch.suggestDropdown(textIndo);
    
    
  //NOTE: suggestion dengan bahasa indonesia tidak muncul jika kata: test automation,diganti bahasa


  });

});