
/*function class_one(){
    class_one.prototype.wish=`Good Morning`
    console.log(new class_one().wish)
}
*/
/*
function class_one(){}
    class_one.prototype.getWish=()=>{
        return`Welcome to Fsd`
    }
    console.log(new class_one().getWish())
    */
   
   function class_one(){ }
   class_one.prototype.fun_one=()=>{
   console.log(`i m from fun_one`)
   }
   function class_two(){ }
    class_two.prototype= Object.create(class_one.prototype)
    class_two.prototype.fun_two=()=>{
    console.log(`i m from fun_two`)
    }
    function class_three(){ }
    class_three.prototype= Object.create(class_one.prototype)
    class_three.prototype.fun_three=()=>{
    console.log(`i m from fun_three`)
    }
    let obj= new class_three()
    obj.fun_one()
    obj.fun_two
    obj.fun_three
    function class_one(){}
    class_one.prototype.fun_one



    

