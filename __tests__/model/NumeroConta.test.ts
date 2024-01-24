import { NumeroConta } from "../../model/NumeroConta"

describe("Numero Conta", () => {

    test("Conta com seis digitos", async () => {
        const numeroConta: NumeroConta = new NumeroConta("123456")
        expect(numeroConta.numero).toBe("123456")
        expect(numeroConta.numero.length).toBe(6)
    })

    test("Conta com quatro digitos", async () => {
        expect(() => new NumeroConta("1234")).toThrow("numero da conta invalido")
    })
    test("Conta com sete digitos", async () => {
        expect(() => new NumeroConta("1234567")).toThrow("numero da conta invalido")
    })

    test("Conta com valor nao numerico", async () => {
        expect(() => new NumeroConta("abc123")).toThrow("numero da conta invalido")
    })
})