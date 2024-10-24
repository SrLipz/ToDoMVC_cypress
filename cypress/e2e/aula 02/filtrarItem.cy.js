import telaInicialPageObjects from "../../support/pageObjects/telaInicial.pageObjects"

describe('Concluir itens na lista de ToDo', () => {
    beforeEach(() => {
        cy.visit('/')
        
            var todoItens = ["Maça", "Banana"]
            todoItens.forEach(function(item){
                telaInicialPageObjects.inputText(item)
          })
          telaInicialPageObjects.concluirItem()
    })
      it('Filtrar os itens ativos', () => {
        telaInicialPageObjects.filtrarItem("Active")
      });
      it('Filtrar os itens concluidos', () => {
        telaInicialPageObjects.filtrarItem("Completed")
    });
  });