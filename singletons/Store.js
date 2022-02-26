var Logger=require('./Logger')
var  logger=new Logger().getInstance()



class Store{

    constructor(name,inventory=[]) {

        this.name=name
        this.inventory=inventory
        logger.log(`new store : ${name} has ${inventory.length} item in stock`)
    }
}

module.exports=Store