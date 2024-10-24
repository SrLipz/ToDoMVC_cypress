import telaInicialPageObjects from "../../support/pageObjects/telaInicial.pageObjects"

describe('Concluir itens na lista de ToDo', () => {
    beforeEach(() => {
        cy.visit('/')
        
            var todoItens = ["Maça", "Banana", "Cenoura"]
            todoItens.forEach(function(item){
                telaInicialPageObjects.inputText(item)
          })
    })
      it('Concluir o item', () => {
        telaInicialPageObjects.concluirItem()
      });
      
  });