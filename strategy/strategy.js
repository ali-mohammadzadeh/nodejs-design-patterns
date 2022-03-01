class UPS{
    #name;
    constructor() {
    this.name='UPS'
    }
    calculate(){
        return 25;
    }
}
class FedEx{
    #name;
    constructor() {
        this.#name='FedEx'
    }
    calculate(){
        return 35;
    }
}
class  DHL{
    #name;
    constructor() {
        this.#name='DHL'
    }
    calculate(){
        return 30;
    }
}

class Shipping{
    #company
    setStrategy(company){
        this.#company=company;
    }
    calculate() {
        return this.#company.calculate()
    }
}


const  shipping=new Shipping();
shipping.setStrategy(new UPS())
console.log("UPS Strategy: " + shipping.calculate());
shipping.setStrategy(new FedEx())
console.log("FedEx Strategy: " + shipping.calculate());
shipping.setStrategy(new DHL())
console.log("DHL Strategy: " + shipping.calculate());
