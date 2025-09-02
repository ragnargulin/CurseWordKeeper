describe("Curse Words Manager", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("loads the page", () => {
    cy.contains("Curse Word Keeper").should("exist");
  });

  it("adds a new curse word", () => {
    const word = "fuck";

    cy.get("input[placeholder='Add a new curse word']").type(word);
    cy.contains("Add").click();

    cy.contains(word).should("exist");
  });

  it("deletes a curse word", () => {
  const word = "delete-me";
  cy.get("input[placeholder='Add a new curse word']").type(word);
  cy.contains("Add").click();

  // find the list item containing the word
  cy.contains("li", word) 
    .within(() => {
      // look for button inside this li
      cy.get("button").click();
    });

  // confirm it's gone
  cy.contains(word).should("not.exist");
});

});
