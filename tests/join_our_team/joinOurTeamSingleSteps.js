module.exports = {

  before: function (client) {
    console.log('before: Abriendo el navegador')
    client
    .url('https://decemberlabs.com/')
      .maximizeWindow()
  },

  after: function (client) {
    console.log('after: Cerrando el navegador')
    client.end()
  },

  beforeEach: function () {
    console.log('beforeEach: Ejecutando step')
  },

  afterEach: function () {
    console.log('afterEach: Step ejecutado!')
  },

  '@tags': ['buscador','ejemplo2'],
  'Paso 1: Ingresar a la sección Careers': function (client) {
    client
    .useXpath().waitForElementVisible("//span[contains(text(),'Careers')]",client.globals.timeout.short)
    .useXpath().click("//span[contains(text(),'Careers')]")
    .assert.title('Careers - Be a Game Changer, Join Our Team | December Labs')   
  },

  'Paso 2: Ingresar al formulario de Join our team(A Culture Of Innovation)': function (client) {
    client
    .useXpath()
    .click("//a[contains(text(),'Apply now!')]")
    .waitForElementVisible("//h3[contains(text(),'Join Our Team')]",client.globals.timeout.short)
    .assert.containsText("//h3[contains(text(),'Join Our Team')]", "Join Our Team")
    
  },

  'Paso 3: Ingresar datos al formulario': function (client) {
    client    
    .useXpath()
    .setValue("//input[@type='name']", 'Nightwatch')      
    .setValue("//input[@type='email']", 'test@decemberlabs.com​')      
    .setValue("//input[@type='tel']", '093690526')      
    .setValue("//input[@type='link']", 'https://linkedin.com/in/username')      
    .setValue("//textarea[@name='comments']", 'this is a test')
    .click("//input[@type='submit']")
    
    
  },

  'Paso 4: Validar y cerrar navegador': function (client) {
    client
    .useXpath()
    .waitForElementVisible("//span[contains(text(),'Success! You did it!')]",client.globals.timeout.long)
    .assert.containsText("//span[contains(text(),'Success! You did it!')]", "Success! You did it!")
    .waitForElementVisible("//body/section[1]/article[1]/div[1]/div[2]/a[1]",client.globals.timeout.short)
  }

}
