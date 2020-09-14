describe("My First Test", () => {
  it("Homepage shows correct heading", () => {
    cy.visit("https://dz5st104ab4ar.cloudfront.net/")
      .get(".content")
      .should("have.text", "Hello World!");
  });
  it("Homepage shows correct version", () => {
    cy.visit("https://dz5st104ab4ar.cloudfront.net/")
      .get(".version")
      .should("have.text", "V 0.5");
  });
});
