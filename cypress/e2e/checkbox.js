/// <reference types = "cypress" />
/// <reference types = "cypress-xpath" />


describe('Text Box', () => {
    it('Populating text box', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.card-body').contains("Elements").click()
        cy.xpath('//span[text()="Text Box"]').click()
        cy.xpath("//div[@class='main-header']").should('have.text','Text Box')

        const username = cy.get('#userName')
        username.type('Hllo')
        cy.get('#userEmail').type('Hllo@gmail.com')
        cy.get('#currentAddress').type('Hllo@gmail.com')
        cy.get('#permanentAddress').type('Hllo@gmail.com')
        cy.get('#submit').click()

        // Assertions
        cy.get('.border').should('have.class','border')
        cy.get('#name').should('have.text','Name:Hllo')
        cy.get('#email').should('have.text','Email:Hllo@gmail.com')
        cy.get('.border > #currentAddress').should('have.text','Current Address :Hllo@gmail.com ')
        cy.get('.border > #permanentAddress').should('have.text','Permananet Address :Hllo@gmail.com')
        

       


      
    });



    it('Check Buttons', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.card-body').contains("Elements").click()
        cy.xpath("//span[text()='Check Box']").click()
        // assertions of the check buttons tab
        cy.xpath("//div[@class='main-header']").should('have.text','Check Box')
        cy.get('.rct-checkbox >.rct-icon').click()


    //    chiecking if the + button is working

    cy.xpath("//button[@title='Expand all']").click()
    
        cy.xpath("//div[@id='result']").contains('desktop')





        
    });




    it('Radio button', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.card-body').contains("Elements").click()
        cy.xpath('//span[text()="Radio Button"]').click()
        cy.xpath("//div[@class='main-header']").should('have.text','Radio Button')


        // cy.xpath("//input[type='radio']").first().check()
        cy.get('.col-md-6 > :nth-child(2) > :nth-child(2)').click()
        cy.get('.text-success').should('have.text','Yes')


        cy.get('.col-md-6 > :nth-child(2) > :nth-child(3)').click()
        cy.get('.text-success').should('have.text','Impressive')

        cy.get('.custom-control.disabled').should('have.class','disabled')
    });




    it('Web Tables', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.card-body').contains("Elements").click()
        cy.xpath('//span[text()="Web Tables"]').click()
        cy.xpath("//div[@class='main-header']").should('have.text','Web Tables')
        cy.xpath("//button[contains(@id,'addNewRecordButton')]").click()

        // asseretions of the modal
        cy.xpath("//div[contains(@class,'modal-content')]").should('be.visible')

        cy.xpath("//input[contains(@id,'firstName')]").type('firstname')
        cy.xpath("//input[contains(@id,'lastName')]").type('lastname')
        cy.xpath("//input[contains(@id,'userEmail')]").type('lastname@gmail.com')
        cy.xpath("//input[contains(@id,'age')]").type(45)
        cy.xpath("//input[contains(@id,'salary')]").type(354678)
        cy.xpath("//input[contains(@id,'department')]").type('Operations')
        cy.xpath("//button[contains(@id,'submit')]").click()
// 
        cy.xpath("//div[contains(@class,'rt-tr-group')]").invoke('text').as('thumbnail')
        cy.get('@thumbnail').should('include','firstname')
         cy.xpath("//div[contains(@class,'rt-tr-group')]").contains('lastname').should('have.text','lastname')
        cy.xpath("//div[contains(@class,'rt-tr-group')]").contains('firstname').should('have.text','firstname')
        cy.xpath("//div[contains(@class,'rt-tr-group')]").contains(45).should('exist')
        cy.xpath("//div[contains(@class,'rt-tr-group')]").contains(354678).should('exist')
        cy.xpath("//div[contains(@class,'rt-tr-group')]").contains('Operations').should('have.text','Operations')

        
    });

    



    
    it('clicking the button', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.card-body').contains("Elements").click()
        cy.xpath('//span[text()="Buttons"]').click()
        cy.xpath("//div[@class='main-header']").should('have.text','Buttons')
        cy.xpath("//button[contains(@id,'doubleClickBtn')]").dblclick()
        // assert
        cy.get('#doubleClickMessage').should('have.text','You have done a double click')
      
        // assert
        cy.xpath("//button[contains(@id,'rightClickBtn')]").rightclick()
        cy.get('#rightClickMessage').should('have.text','You have done a right click')

        cy.get('.btn').contains('Click Me').click({force: true})
        cy.get('#dynamicClickMessage')

        
    });





        it('Links', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.card-body').contains("Elements").click()
        cy.xpath('//span[text()="Links"]').click()
        cy.xpath("//div[@class='main-header']").should('have.text','Links')
        cy.xpath("//a[@id='simpleLink']").click()
        cy.location('pathname').should('eq', '/https://demoqa.com/')
        cy.xpath("//a[@id='dynamicLink']").click()



        // API LINKS

        cy.get('#created').click()
        // assert
        cy.xpath("//p[@id='linkResponse']").should("have.text",'Link has responded with staus 201 and status text Created')

        cy.get('#no-content').click()
        // assert
        cy.xpath("//p[@id='linkResponse']").should("have.text",'Link has responded with staus 204 and status text No Content')

        cy.get('#moved').click()
        // assert
        cy.xpath("//p[@id='linkResponse']").should("have.text",'Link has responded with staus 301 and status text Moved Permanently')

        cy.get('#bad-request').click()
        // assert
        cy.xpath("//p[@id='linkResponse']").should("have.text",'Link has responded with staus 400 and status text Bad Request')

        cy.get('#unauthorized').click()
        // assert
        cy.xpath("//p[@id='linkResponse']").should("have.text",'Link has responded with staus 401 and status text Unauthorized')

        cy.get('#forbidden').click()
        // assert
        cy.xpath("//p[@id='linkResponse']").should("have.text",'Link has responded with staus 403 and status text Forbidden')

        cy.get('#invalid-url').click()
        // assert
        cy.xpath("//p[@id='linkResponse']").should("have.text",'Link has responded with staus 404 and status text Not Found')





        });


        it('Broken Links', () => {
            cy.visit('https://demoqa.com/')
            cy.get('.card-body').contains("Elements").click()
            cy.xpath('//span[text()="Broken Links - Images"]').click()
            cy.xpath("//div[@class='main-header']").should('have.text','Broken Links - Images')
            
             // valid image
            cy.xpath("//div/p").eq(0).should("have.text",'Valid image')
            cy.xpath("//div/img").eq(0).should('exist')

           // invalid image
            cy.xpath("//div/p").eq(1).should("have.text",'Broken image')
          
            cy.xpath("//div/img").eq(1).should('not.be.visible')
            


    
         
            });
    
    
       it('Upload and Download', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.card-body').contains("Elements").click()
        cy.xpath('//span[text()="Upload and Download"]').click()
        cy.xpath("//div[@class='main-header']").should('have.text','Upload and Download')
        // cy.get('#downloadButton').click()
        // cy.get('#downloadButton').should('have.attr','download')
        // cy.downloadFile('sampleFile.jpeg').then((data)=>{
        //     expect(data).to.exist
        // })
        cy.verifyDownload('sampleFile.jpeg')
        // cy.get('#uploadFile').click() 
        // cy.xpath("//input[@id='uploadFile']").click()
        cy.get('#uploadFile').click() 
        cy.get('#uploadFile').should('exist')
        cy.get('#uploadedFilePath').should('exist')




       });



          
       it.only('Upload and Download', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.card-body').contains("Elements").click()
        cy.xpath('//span[text()="Upload and Download"]').click()
        cy.xpath("//div[@class='main-header']").should('have.text','Upload and Download')
        // cy.get('#downloadButton').click()
        // cy.get('#downloadButton').should('have.attr','download')
        // cy.downloadFile('sampleFile.jpeg').then((data)=>{
        //     expect(data).to.exist
        // })
        cy.verifyDownload('sampleFile.jpeg')
        // cy.get('#uploadFile').click() 
        // cy.xpath("//input[@id='uploadFile']").click()
        cy.get('#uploadFile').click() 
        cy.get('#uploadFile').should('exist')
        cy.get('#uploadedFilePath').should('exist')




       });


});