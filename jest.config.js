module.exports = {
    projects: [
      {
        displayName: 'cypress',
        runner: 'cypress-jest',
        testMatch: ['<rootDir>/**/*-cy.js'],
      },
      {
        displayName: 'test' // Your other unit Tests with jest
      }
    ]
  }
