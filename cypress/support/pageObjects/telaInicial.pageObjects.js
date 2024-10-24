const elem = require('../elements/telaInicial.elements').ELEMENTS
const concluirItem = require('../elements/telaInicial.elements').ITENS
const filtrar = require('../elements/telaInicial.elements').FILTROS
const validar = require('../elements/telaInicial.elements').VALIDARITENSTODO

class telaInicial{

    inputText(dado){
        cy.get(elem.inputToDo).type(dado).type('{enter}')
    }
    validarInput(texto){
        cy.get(elem.inputToDo)
        .should('have.attr', 'placeholder')
        .and('include', texto)
    }
    validarContador(textoEsperado){
        cy.get(validar.validarItensToDo).should('have.text', textoEsperado);
    }
    concluirItem(){
        cy.get(concluirItem.buttonConcluir).first().click()
    }
    filtrarItem(menu){
        cy.get(filtrar.filtroToDo)
        .contains(menu)
        .and('be.visible')
        .click()
    }
    validarSizeToDo(numberInfo){
        cy.get(concluirItem.listaItens).should('have.length', numberInfo);
    }
    deletarItem(){
        cy.get(concluirItem.listaItens)
        .first()
        .find('button')
        .invoke('show')
        .click()
    }
}

export default new telaInicial();