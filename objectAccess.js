class OBJ{
   
    constructor(a,b,c){
        this.a=a;
        this.b=b;
        this.c=c;

    }
    print(){
        return "a value is "+this.a+" b value is "+this.b+" c value is "+this.c;
    }

}
let input=new OBJ(10,20,30);
console.log(input.print());