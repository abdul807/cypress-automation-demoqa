/// <reference types = "cypress" />
/// <reference types = "cypress-xpath" />

describe("Text Box", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com/");
    cy.get(".card-body").contains("Elements").click();
  });

  it("Populating text box", () => {
    cy.xpath('//span[text()="Text Box"]').click();
    cy.xpath("//div[@class='main-header']").should("have.text", "Text Box");

    const username = cy.get("#userName");
    username.type("Hllo");
    cy.get("#userEmail").type("Hllo@gmail.com");
    cy.get("#currentAddress").type("Hllo@gmail.com");
    cy.get("#permanentAddress").type("Hllo@gmail.com");
    cy.get("#submit").click();

    // Assertions
    cy.get(".border").should("have.class", "border");
    cy.get("#name").should("have.text", "Name:Hllo");
    cy.get("#email").should("have.text", "Email:Hllo@gmail.com");
    cy.get(".border > #currentAddress").should(
      "have.text",
      "Current Address :Hllo@gmail.com "
    );
    cy.get(".border > #permanentAddress").should(
      "have.text",
      "Permananet Address :Hllo@gmail.com"
    );
  });

  it("Check Buttons", () => {
    cy.xpath("//span[text()='Check Box']").click();
    // assertions of the check buttons tab
    cy.xpath("//div[@class='main-header']").should("have.text", "Check Box");
    cy.get(".rct-checkbox >.rct-icon").click();

    //    chiecking if the + button is working

    cy.xpath("//button[@title='Expand all']").click();

    cy.xpath("//div[@id='result']").contains("desktop");

    // assertions
    cy.get("#result").should("exist");
  });

  it("Radio button", () => {
    cy.xpath('//span[text()="Radio Button"]').click();
    cy.xpath("//div[@class='main-header']").should("have.text", "Radio Button");

    // cy.xpath("//input[type='radio']").first().check()
    cy.get(".col-md-6 > :nth-child(2) > :nth-child(2)").click();
    cy.get(".text-success").should("have.text", "Yes");

    cy.get(".col-md-6 > :nth-child(2) > :nth-child(3)").click();
    cy.get(".text-success").should("have.text", "Impressive");

    cy.get(".custom-control.disabled").should("have.class", "disabled");
  });

  it("Web Tables", () => {
    cy.xpath('//span[text()="Web Tables"]').click();
    cy.xpath("//div[@class='main-header']").should("have.text", "Web Tables");
    cy.xpath("//button[contains(@id,'addNewRecordButton')]").click();

    // asseretions of the modal
    cy.xpath("//div[contains(@class,'modal-content')]").should("be.visible");

    cy.xpath("//input[contains(@id,'firstName')]").type("firstname");
    cy.xpath("//input[contains(@id,'lastName')]").type("lastname");
    cy.xpath("//input[contains(@id,'userEmail')]").type("lastname@gmail.com");
    cy.xpath("//input[contains(@id,'age')]").type(45);
    cy.xpath("//input[contains(@id,'salary')]").type(354678);
    cy.xpath("//input[contains(@id,'department')]").type("Operations");
    cy.xpath("//button[contains(@id,'submit')]").click();
    //
    cy.xpath("//div[contains(@class,'rt-tr-group')]")
      .invoke("text")
      .as("thumbnail");
    cy.get("@thumbnail").should("include", "firstname");
    cy.xpath("//div[contains(@class,'rt-tr-group')]")
      .contains("lastname")
      .should("have.text", "lastname");
    cy.xpath("//div[contains(@class,'rt-tr-group')]")
      .contains("firstname")
      .should("have.text", "firstname");
    cy.xpath("//div[contains(@class,'rt-tr-group')]")
      .contains(45)
      .should("exist");
    cy.xpath("//div[contains(@class,'rt-tr-group')]")
      .contains(354678)
      .should("exist");
    cy.xpath("//div[contains(@class,'rt-tr-group')]")
      .contains("Operations")
      .should("have.text", "Operations");
  });

  it("clicking the button", () => {
    cy.xpath('//span[text()="Buttons"]').click();
    cy.xpath("//div[@class='main-header']").should("have.text", "Buttons");
    cy.xpath("//button[contains(@id,'doubleClickBtn')]").dblclick();
    // assert
    cy.get("#doubleClickMessage").should(
      "have.text",
      "You have done a double click"
    );

    // assert
    cy.xpath("//button[contains(@id,'rightClickBtn')]").rightclick();
    cy.get("#rightClickMessage").should(
      "have.text",
      "You have done a right click"
    );

    cy.get(".btn").contains("Click Me").click({ force: true });
    // cy.get("#dynamicClickMessage");
  });

  it("Links", () => {
    cy.xpath('//span[text()="Links"]').click();
    cy.xpath("//div[@class='main-header']").should("have.text", "Links");

    cy.on("window:before:load", (win) => {
      cy.wrap(win)
        .its("location.href")
        .should("include", "/https://demoqa.com/");
    });
    cy.xpath("//a[@id='simpleLink']").click();
    // cy.location("pathname").should("eq", "/https://demoqa.com/");

    cy.on("window:before:load", (win) => {
      cy.wrap(win)
        .its("location.href")
        .should("include", "/https://demoqa.com/");
    });
    cy.xpath("//a[@id='dynamicLink']").click();

    // API LINKS

    cy.get("#created").click();
    // assert
    cy.xpath("//p[@id='linkResponse']").should(
      "have.text",
      "Link has responded with staus 201 and status text Created"
    );

    cy.get("#no-content").click();
    // assert
    cy.xpath("//p[@id='linkResponse']").should(
      "have.text",
      "Link has responded with staus 204 and status text No Content"
    );

    cy.get("#moved").click();
    // assert
    cy.xpath("//p[@id='linkResponse']").should(
      "have.text",
      "Link has responded with staus 301 and status text Moved Permanently"
    );

    cy.get("#bad-request").click();
    // assert
    cy.xpath("//p[@id='linkResponse']").should(
      "have.text",
      "Link has responded with staus 400 and status text Bad Request"
    );

    cy.get("#unauthorized").click();
    // assert
    cy.xpath("//p[@id='linkResponse']").should(
      "have.text",
      "Link has responded with staus 401 and status text Unauthorized"
    );

    cy.get("#forbidden").click();
    // assert
    cy.xpath("//p[@id='linkResponse']").should(
      "have.text",
      "Link has responded with staus 403 and status text Forbidden"
    );

    cy.get("#invalid-url").click();
    // assert
    cy.xpath("//p[@id='linkResponse']").should(
      "have.text",
      "Link has responded with staus 404 and status text Not Found"
    );
  });

  it("Broken Links", () => {
    cy.xpath('//span[text()="Broken Links - Images"]').click();
    cy.xpath("//div[@class='main-header']").should(
      "have.text",
      "Broken Links - Images"
    );

    // valid image
    cy.xpath("//div/p").eq(0).should("have.text", "Valid image");
    cy.xpath("//div/img").eq(0).should("exist");

    // invalid image
    cy.xpath("//div/p").eq(1).should("have.text", "Broken image");

    cy.xpath("//div/img").eq(1).should("not.be.visible");
  });

  it.only("Upload and Download", () => {
    cy.visit("https://demoqa.com/");
    cy.get(".card-body").contains("Elements").click();
    cy.xpath('//span[text()="Upload and Download"]').click();
    cy.xpath("//div[@class='main-header']").should(
      "have.text",
      "Upload and Download"
    );

    cy.verifyDownload("sampleFile.jpeg");

    cy.get("#uploadFile").attachFile("images/sampleFile.jpeg");
    cy.get("#uploadedFilePath").should("exist");
  });

  it("Browser windows", () => {
    cy.get(":nth-child(3) > .group-header > .header-wrapper").click();
    cy.xpath("//div[@class='main-header']").should("have.text", "Elements");
    cy.get(":nth-child(3) > .element-list > .menu-list > #item-0").click();
    cy.get(":nth-child(3) > .element-list > .menu-list > #item-0").should(
      "have.text",
      "Browser Windows"
    );
    // assertions should be here

    cy.get(":nth-child(3) > .element-list > .menu-list > #item-0").click();
    // cy.window().then(function(win){
    //     cy.stub(win,'open').as('open')
    // })

    // cy.get('@open').should('have.been.calledWith','/sample','_blank')
    // cy.get('@open').should('include.text','This is a sample page')

    cy.get("#windowButton").click();
    // cy.window().then(function(win){
    //     cy.stub(win,'open').as('open')
    // })
    cy.get("#windowButton").click();
  });

  it("Alerts", () => {
    cy.get(":nth-child(3) > .group-header > .header-wrapper").click();
    cy.xpath("//div[@class='main-header']").should("have.text", "Elements");
    cy.get(":nth-child(3) > .element-list > .menu-list > #item-1").click();
    cy.contains("Alerts").should("exist");
    cy.get("#alertButton").click();
    cy.on("window:alert", function (text) {
      expect(text).to.contains("You clicked a button");

      
    });
    cy.get("#confirmButton").click();
    cy.on("window:confirm", function (text) {
      expect(text).to.contains("Do you confirm action?");
    });
    cy.get("#confirmResult").should("have.text", "You selected Ok");

    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("Pizza");
      cy.get("#promtButton").click();
      cy.get("#promptResult").should("have.text", "You entered Pizza");
    });
  });

  it("Frames", () => {
    cy.visit("https://demoqa.com/");
    cy.get(".card-body").contains("Elements").click();
    cy.get(":nth-child(3) > .group-header > .header-wrapper").click();
    cy.xpath("//div[@class='main-header']").should("have.text", "Elements");
    cy.get(":nth-child(3) > .element-list > .menu-list > #item-2").click();
    cy.get(".playgound-header").should("have.text", "Frames");
    cy.get("#framesWrapper > :nth-child(1)").should(
      "include.text",
      "Sample Iframe page"
    );
    cy.get("#frame1")
      .its("0.contentDocument")
      .find("#sampleHeading")
      .should("have.text", "This is a sample page");
    cy.get("#frame2")
      .its("0.contentDocument")
      .find("#sampleHeading")
      .should("have.text", "This is a sample page");
  });

  it("Nested Frames", () => {
    cy.visit("https://demoqa.com/");
    cy.get(".card-body").contains("Elements").click();
    cy.get(":nth-child(3) > .group-header > .header-wrapper").click();
    cy.xpath("//div[@class='main-header']").should("have.text", "Elements");
    cy.get(":nth-child(3) > .element-list > .menu-list > #item-3").click();
    cy.get(".playgound-header").should("have.text", "Nested Frames");
   
    cy.get("#frame1")
      .its("0.contentDocument")
      .find("body")
      .should("have.text", "Parent frame");
    cy.get("#frame1")
      .its("0.contentDocument")
      .find("iframe")
      .its("0.contentDocument")
      .find("body")
      .should("have.text", "Child Iframe");

    });

  it("Alerts", () => {
    cy.visit("https://demoqa.com/");
    cy.get(".card-body").contains("Elements").click();
    cy.get(":nth-child(3) > .group-header > .header-wrapper").click();
    cy.xpath("//div[@class='main-header']").should("have.text", "Elements");
    cy.get(
      ":nth-child(3) > .element-list > .menu-list > #item-4 > .text"
    ).click();
    cy.get(".playgound-header").should("have.text", "Modal Dialogs");
    cy.get("#showSmallModal").click();
    cy.get(".modal-content").should("exist");
    cy.get("#closeSmallModal").click();
    cy.get(".modal-content").should("not.exist");
    cy.get("#showLargeModal").click();
    cy.get(".modal-content").should("be.visible");
    cy.get("#closeLargeModal").click();
    cy.get(".modal-content").should("not.exist");
  });
});
