describe('Mini Project: End-to-End Automation Suite', () => {

  beforeEach(() => {
    // 1. Visit the practice portal
    cy.visit('https://testautomationpractice.blogspot.com/')
  })

  it('Executes clean scoped form assertions without structural conflicts', () => {
    
    // Target the Data Entry Form wrapper class directly 
    cy.get('.form-group, fieldset, .form-container, body').then(($body) => {
    cy.get('#name', { timeout: 10000 }).should('be.visible')  
      // 2. Scoped form entry values - uses specific attributes to prevent element mixups
      cy.get('input[id="name"]').filter(':visible').first().clear().type('valaryakose')
      cy.get('input[id="email"]').filter(':visible').first().clear().type('valary@example.com')
      cy.get('input[id="phone"]').filter(':visible').first().clear().type('1123456789')
      cy.get('textarea[id="textarea"]').filter(':visible').first().clear().type('123 Main Street, Nairobi')

      // 3. Dropdown Menu selection handling
      cy.get('select[id="country"]').select('Canada')

      // 4. Radio Button interaction
      cy.get('input[id="female"]').check()

      // 5. Checkbox toggle operations
      cy.get('input[id="monday"]').check()
      cy.get('input[id="sunday"]').check()
      cy.get('input[id="sunday"]').uncheck()

      // SCREENSHOT 
      cy.screenshot('1-form-filled-state')

      // 6. File Upload 
      cy.get('input[type="file"]#singleFileInput').selectFile('cypress/fixtures/example.json')

      // 7. Scroll tracking down to bottom visibility 
      cy.get('.footer-inner').scrollIntoView()

      // MANDATORY ASSERTIONS VERIFICATION
      cy.get('.footer-inner').should('be.visible') // Assertion 1
      cy.get('input[id="name"]').first().should('have.value', 'valaryakose') // Assertion 2
      cy.get('input[id="female"]').should('be.checked') // Assertion 3
      cy.get('input[id="sunday"]').should('not.be.checked') // Assertion 4
      cy.get('input[type="file"]#singleFileInput').should('exist') // Assertion 5

      // SCREENSHOT 
      cy.screenshot('2-final-passed-assertions')
    })
  })
})

