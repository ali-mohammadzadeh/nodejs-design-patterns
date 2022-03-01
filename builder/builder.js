class Home{
  build(builder){
    return  builder.get();
  }
}

class HomeBuilder {
  room(count=1){
    this.room=count;
    return this
  }
  kitchen(count=1){
    this.kitchen=count;
    return this
  }
  wc(count=1){
    this.wc=count;
    return this
  }
  floor(count=1){
    this.floor=count;
    return this
  }
  gameRoom(count=1){
    this.gameRoom=count;
    return this
  }
  get() {
        return this
    }
}

homeInstance=new Home()
homeBuilder=new HomeBuilder()
homeBuilder.room(5);
homeBuilder.kitchen(3);
homeBuilder.gameRoom(1);
homeBuilder.floor(3);
let homeDetails=homeInstance.build(homeBuilder);
console.log(homeDetails);
