let carro = {
  cor: "Rosa Choque",
  //   placa: "DC-30",
  ano: 2045,
  ligado: true,
  velocidade: 0,
  cavalo: 1.5,
  acoes: {
    acelerar: function () {
      // console.log(this.frear());
      console.log(this.ligado);
      return "Vrummm";
    },

    frear: function () {
      return "Iiiiii";
    },
  },
};

// carro.cor = "azul";
// console.log(carro.cor);

// carro.placa = "1234";
// console.log(carro.placa);

// console.log(carro.acoes.acelerar());

let func = carro.acoes.acelerar.bind(carro);
console.log(func());
