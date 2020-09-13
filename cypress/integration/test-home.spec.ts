describe("My First Test", () => {
  it("Homepage shows correct heading", () => {
    cy.visit("http://mytestapp-1234.s3-website-us-east-1.amazonaws.com/")
      .get(".content")
      .should("have.text", "Hello World!");
  });
});
