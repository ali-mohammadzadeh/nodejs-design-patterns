class Shopper {

   _shoppingList=[];
    constructor(name="not found name") {
    this._name=name;
   }

   set name(value){
        this._name=value
    }
    get name(){
        return this._name
    }

  get shoppingList(){
    return this._shoppingList.join('  ')
  }

  addItemToList(item){
    this._shoppingList.push(item)
  }

  clone(){
      var proto=Object.getPrototypeOf(this)
      var cloned= Object.create(proto)
      cloned._name=this._name
      cloned._shoppingList=[...this._shoppingList];

      return cloned
  }
}

let shopperInstance=new Shopper()
shopperInstance.addItemToList("mobile")
shopperInstance.addItemToList("guard")


let rezaInstance=shopperInstance.clone()
rezaInstance.name="reza"
rezaInstance.addItemToList("screen-guard")

let aliInstance=shopperInstance.clone()
aliInstance.name="ali"
aliInstance.addItemToList("headphone")
aliInstance.addItemToList("screen-guard")






console.log(`${rezaInstance.name} : ${rezaInstance.shoppingList}`)
console.log(`${aliInstance.name} : ${aliInstance.shoppingList}`)
