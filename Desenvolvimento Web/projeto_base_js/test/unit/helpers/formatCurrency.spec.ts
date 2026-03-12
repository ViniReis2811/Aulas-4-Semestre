// describe: suites de teste => agrupamentos

import { formatCurrency } from "../../../src/helpers/formatCurrency";



describe("formatCurrency", () => {

    beforeAll(() => {
        // instruções a serem executadas antes de todos os testes da suite
    });

    afterAll(() => {
        // instruções a serem executadas após todos os testes da suite
    })

    beforeEach(() => {
        //instruções a serem executadas antes de cada teste da suite
    })
    // afterEach() ...

    
    // test/it: testes individuais de cada possível cenário de sucesso ou erro
        // Ex: test("formatCurrency(5.31) => R$ 5,31", () => {});


    it("should return R$ 5,31 when value = 5.31", () => {
    // AAA - Arrange, Act, Assert
        /* 
            Arrange -> Prepara o cenário (mocks, variáveis, instâncias)
            Act     -> Executa a função ou rota sob teste
            Assert  -> Verifica se o resultado foi o esperado
        */

        // Arrange
        const value = 5.31;

        //Act
        const formattedValue = formatCurrency(value)

        //Assert
        expect(formattedValue).toEqual('R$ 5,31');
    });
})