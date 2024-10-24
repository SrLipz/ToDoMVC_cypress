import telaInicialPageObjects from "../../support/pageObjects/telaInicial.pageObjects"

describe('Deletar itens da lista de ToDo', () => {
    beforeEach(() => {
        cy.visit('/')
        
            var todoItens = ["Maça", "Banana"]
            todoItens.forEach(function(item){
                telaInicialPageObjects.inputText(item)
          })
    })
      it('deleção de um item da lista', () => {
        telaInicialPageObjects.deletarItem()
      });
      
  });