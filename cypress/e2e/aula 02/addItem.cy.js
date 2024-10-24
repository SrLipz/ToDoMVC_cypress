import telaInicialPageObjects from "../../support/pageObjects/telaInicial.pageObjects"

describe('Adicionar itens a minha lista de ToDo', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('Adicionar um item a lista', () => {
        telaInicialPageObjects.inputText("Felipe")
      })
      it('Adicionar mais de um item a lista', () => {
        var todoItens = ["Maça", "Banana", "Cenoura"]
        todoItens.forEach(function(item){
            telaInicialPageObjects.inputText(item)
        })
      })
      
  })