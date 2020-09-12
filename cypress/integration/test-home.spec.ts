describe("My First Test", () => {
  it("Homepage shows correct heading", () => {
    cy.visit("http://localhost:3000")
      .get(".content")
      .should("have.text", "Hello World!");
  });
});
