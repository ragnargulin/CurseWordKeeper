describe("Curse Words Manager", () => {
  beforeEach(() => {
  cy.request("POST", "http://localhost:3000/api/flush");
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
  const word = "motherfucker";
  cy.get("input[placeholder='Add a new curse word']").type(word);
  cy.contains("Add").click();

  // find the list item containing the word
  cy.contains("li", word) 
    .within(() => {
      cy.get("button").click();
    });

  // confirm it's gone
  cy.contains(word).should("not.exist");
});

it("does not allow non-curse words", () => {
  cy.get("input[placeholder='Add a new curse word']").type("kitten");
  cy.contains("Add").click();

  cy.on("window:alert", (txt) => {
    expect(txt).to.contain("That's not a fucking curse word!");
  });

  cy.contains("kitten").should("not.exist");
});


});
