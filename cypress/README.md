# cypress-end2end-automation-testing


 easiest concept 
The easiest concepts to understand were the foundational structural hooks and basic user commands. Grouping tests into a logical hierarchy using describe() and it() blocks felt highly intuitive and organized. Additionally, using commands like .click(), .clear(), and .type() made total sense immediately because their names perfectly match the physical actions a human takes when browsing a web page. Seeing Cypress automatically open a browser window and rapidly type into fields right in front of me made the learning process highly interactive and rewarding.

most challenging
the most challenging aspect of the assignment was dealing with browser synchronisation, asynchronous rendering states, and handling application errors. When testing live websites like demoqa.com, hidden background errors threw unexpected exception errors that caused Cypress to instantly fail my test pipeline, even though my written selectors were technically correct. Learning how to configure global exception overrides in cypress/support/e2e.js using Cypress.on('uncaught:exception') was a steep learning curve. Figuring out how to navigate elements sequentially using positional index counters like .eq() taught me that selectors must be highly adaptive to withstand real-world layout structures.


