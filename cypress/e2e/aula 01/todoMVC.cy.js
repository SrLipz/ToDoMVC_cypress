import telaInicialPageObjects from "../../support/pageObjects/telaInicial.pageObjects"

describe('Acessar a pagina do ToDoMVC', () => {
    it('abrir o site', () => {
      cy.visit('https://todomvc.com/examples/react/dist/')
      telaInicialPageObjects.inputText()
    })
  })