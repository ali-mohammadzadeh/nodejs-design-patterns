let Logger=require('./Logger')
let Shopper=require('./Shopper')
let Store=require('./Store')
let logger=new Logger().getInstance()

logger.log('starting app ....')

let ali=new Shopper('ali',500)

let ski_shop=new Store('Steep and deep supplies',
    [
        {
            item:' test',
            qty:5,
            price:5,
        },
        {
            item:' test1',
            qty:50,
            price:50,
        }
    ]
    )

logger.log('finish ........')

console.table(`${logger.count} loges total`)


logger.loges.map(log=>console.log(`${log.message}`))