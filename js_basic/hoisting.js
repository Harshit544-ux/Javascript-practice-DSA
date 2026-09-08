function outer(){

    let name = "outer function access"
   

    function inner(){
        let innerName = "inner function access"
        console.log(name)
    }
 
    return  inner

}

const fn = outer();
fn();