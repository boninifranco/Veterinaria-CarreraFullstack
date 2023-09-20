var Pacientes = /** @class */ (function () {
    function Pacientes(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }
    Pacientes.prototype.getMascotaNombre = function () {
        return this.nombre;
    };
    Pacientes.prototype.setMascotaNombre = function (nuevaMascota) {
        this.nombre = nuevaMascota;
    };
    Pacientes.prototype.getEspecie = function () {
        return this.clasificarEspecie(this.especie);
    };
    Pacientes.prototype.setEspecie = function (nuevaEspecie) {
        this.especie = nuevaEspecie;
    };
    Pacientes.prototype.clasificarEspecie = function (especie) {
        if (especie.toLowerCase() == "perro") {
            return especie.toLowerCase();
        }
        else if (especie.toLowerCase() == "gato") {
            return especie.toLowerCase();
        }
        else {
            return "exótica";
        }
    };
    return Pacientes;
}());
var paciente1 = new Pacientes("lolo", "PERRO");
console.log(paciente1.getEspecie());
var paciente2 = new Pacientes("sofia", "GATO");
console.log(paciente2.getEspecie());
var paciente3 = new Pacientes("asd", "FOCA");
console.log(paciente3.getEspecie());
