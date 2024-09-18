class Bondam{
    #nam;
    #val;
    constructor(nam,val){
        this.#nam=nam;
        this.#val=val;

        

    }
    get getName(){
            return this.#nam;
        }
    set setName(nam){
        return this.#nam=nam;
    }

    
}
let ban=new Bondam("Sushanth",45);
console.log(ban.getName)

ban.setName="Vijay";

console.log(ban.getName)



