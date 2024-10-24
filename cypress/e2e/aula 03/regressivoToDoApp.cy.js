import telaInicialPageObjects from "../../support/pageObjects/telaInicial.pageObjects"

describe('Regressivo ToDo App', () => {

    context('Validar a tela Inicial', () => {
        beforeEach(() => {
            cy.visit('/')
        });
        it('Validar a aria label de input de dados', () => {
            telaInicialPageObjects.validarInput("What needs to be done?")
          })
    });
    context('Validar a adição de itens', () => {
        beforeEach(() => {
            cy.visit('/')
        });
        it('valida se tem 3 itens na lista', () => {
            var todoItens = ["Maça", "Banana", "Cenoura"]
            todoItens.forEach(function(item){
                telaInicialPageObjects.inputText(item)
            })
            telaInicialPageObjects.validarContador("3 items left!")
        })
        /*Validar que o contador é igual a 3*/
    });
    context('Validar a Conclusão de itens', () => {
        beforeEach(() => {
            cy.visit('/')
                var todoItens = ["Maça", "Banana", "Cenoura"]
                todoItens.forEach(function(item){
                    telaInicialPageObjects.inputText(item)
                    telaInicialPageObjects.concluirItem()
              })
        })
          it('verificar item concluido', () => {
            telaInicialPageObjects.validarContador("2 items left!")
          });
    });
    context('Validar o filtro da aplicação', () => {
        beforeEach(() => {
            cy.visit('/')
            
                var todoItens = ["Maça", "Banana", "Cenoura"]
                todoItens.forEach(function(item){
                    telaInicialPageObjects.inputText(item)
              })
              telaInicialPageObjects.concluirItem()

        })
          it('Validar a lista de itens ativos', () => {
            telaInicialPageObjects.filtrarItem("Active")
            telaInicialPageObjects.validarSizeToDo(2)
          });
          it('Validar a lista de itens concluidos', () => {
            telaInicialPageObjects.filtrarItem("Completed")
            telaInicialPageObjects.validarSizeToDo(1)
          });
    });
    context('Validar a remoção de itens', () => {
        beforeEach(() => {
            cy.visit('/')
                var todoItens = ["Maça", "Banana"]
                todoItens.forEach(function(item){
                    telaInicialPageObjects.inputText(item)
              })
              telaInicialPageObjects.deletarItem()
        })
          it('verificar se o item foi deletado', () => {
            telaInicialPageObjects.validarContador("1 item left!")
          });
    });
  })