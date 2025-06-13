/*8.	Crea una clase CuentaBancaria con métodos depositar() y retirar()
Ejercicio:La clase debe tener propiedades titular y saldo. Los métodos deben modificar el saldo e imprimir el nuevo valor.
*/
class CuentaBancaria {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(cantidad) {
    if (cantidad <= 0) {
      console.log("La cantidad debe ser mayor que 0");
      return;
    }
    this.saldo += cantidad;
    console.log(`Depósito realizado - ${this.titular} tiene: $${this.saldo}`);
  }

  retirar(cantidad) {
    if (cantidad <= 0) {
      console.log("La cantidad debe ser mayor que cero");
      return;
    }
    if (cantidad > this.saldo) {
      console.log(`El Saldo $${cantidad} es menor al actual $${this.saldo}`);
      return;
    }
    this.saldo -= cantidad;
    console.log(`Retiro con éxito ${this.titular}: $${this.saldo}`);
  }
}

const cuenta = new CuentaBancaria("Elías", 2000);
cuenta.depositar(500);
cuenta.retirar(200);