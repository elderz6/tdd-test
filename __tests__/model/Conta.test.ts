import { Conta } from "../../model/Conta";

describe("Conta", () => {

  test("sacar com sucesso", async () => {
    const conta = criarConta()
    conta.sacar(200.0);
    expect(conta.saldo).toBe(4800.00);
  });

  test("depositar com valor negativo", async () => {
    const conta: Conta = criarConta()
    expect(() => { conta.depositar(-5.0); }).toThrow("valor não pode ser igual ou menor que zero");
  });

  test("sacar com valor zerado", async () => {
    const conta: Conta = criarConta()
    expect(() => { conta.sacar(0); }).toThrow("valor não pode ser igual ou menor que zero");
  });

  test("sacar valor acima do saldo", async () => {
    const conta: Conta = criarContaComSaldo199()
    expect(() => { conta.sacar(200.0); }).toThrow("saldo indisponivel para a operação");
  });

});

function criarConta(): Conta{
  return new Conta("123456", 5000.0)
}

function criarContaComSaldo199(): Conta{
  return new Conta("123456", 199.0)
}