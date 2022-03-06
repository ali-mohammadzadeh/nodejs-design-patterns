class Member{
    #chatroomInstance=null
    constructor(name) {
        this.name=name;
    }
    set chatroom(instance){
        this.#chatroomInstance=instance;
    }
    send(message,toMember){
        this.#chatroomInstance.send(message,this,toMember);
    }
    receive(message,fromMember){
        console.log(`${fromMember.name} to ${this.name}: ${message}`);
    }
}


class Chatroom{
    constructor() {
        this.members={}
    }
    addMember(member){
        this.members[member.name]=member;
        member.chatroom=this;
    }
    send(message,fromMember,toMember){
        toMember.receive(message,fromMember)
    }
}


let chatroomInstance=new Chatroom();


let ali=new Member("ali");
let mohammad=new Member("mohammad");


chatroomInstance.addMember(mohammad)
chatroomInstance.addMember(ali)

ali.send('How you doing?', mohammad);
mohammad.send('Hey! Im good how are you yourself?', ali);
ali.send("I am not bad",mohammad)

