class Contacts{
    constructor(){
        this.arrPersons = [];
    }

    printPersons(){
        this.arrPersons.forEach(element => {
            console.log(`---------------------`);
            element.printAll();
        });
    }
}

module.exports = {Contacts};