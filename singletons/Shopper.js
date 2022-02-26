let Logger=require('./Logger')
let  logger=new Logger().getInstance()



class Shopper{

    constructor(name,money) {

        this.name=name
        this.money=money
        logger.log(`new Shopper : ${this.name} has ${this.money} money`)
    }
}

module.exports=Shopper;