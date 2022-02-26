class Logger{

    constructor() {
        this.loges=[];
    }

    get count(){
        return this.loges.length
    }

    log(message){
        const timestamp=new Date().toISOString()
        this.loges.push({message,timestamp})
        console.log(`${timestamp} - ${message}`)
    }
}


class Singleton{

    constructor() {
        if (!Singleton.instance){
            Singleton.instance=new Logger();
            console.log('does not exist')
        }else{
            console.log('exists')
        }
    }

    getInstance(){


        return Singleton.instance;
    }

}

module.exports=Singleton;