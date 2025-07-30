class car{
    constructor(name,type,model){
        this.name=name;
        this.type=type;
        this.model=model;
    }
    getdetails(){
        console.log('My first car is' + ' ' +this.type + ' ' + this.name + ' ' + ' Model is' + ' ' + this.model);

    }
}
let car1 =new car('vitz','toyota','2015')
let car2=new car('Audi TRS','Audi','2018')
car1.getdetails();