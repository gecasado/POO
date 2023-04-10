class person{
    constructor(nombre,apellido,altura,peso,colorOjos,colorPelo,yearOfBirth,hoobies=[]){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
        this.peso = peso;
        this.colorOjos = colorOjos;
        this.colorPelo = colorPelo;
        this.yearOfBirth = yearOfBirth;
        this.hoobies = hoobies;
    }

    calcularIMC(){
        let imc = (this.peso / (this.altura * this.altura))*10000;
        return Number(imc);
    }

    calcularAge(){
        let date = new Date();
        return date.getFullYear() - this.yearOfBirth;
    }

    printAll(){
        for (const attribute in this) {
            console.log(`${attribute}-${this[attribute]}`);
        }
    }

    printHobbies(){
        console.log(`los hobbies dque tiene ${this.name} son:`);
        for (const hobbie in this.hobbies) {
            console.log(this.hobbies[hobbie]);
        }
    }
}

module.exports = {person};