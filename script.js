function myCal(count){
    let arrayN=[];
    for(let number=1; number<=count; number++) {
    let accumulator=''
    if(number%5===0 ||number%3===0 || number%2===0){
    if(number%2===0){
    if(accumulator!='')
    accumulator+='-yu'
    else{
    accumulator='yu'
    }
    }
    if(number%3===0){
    if(accumulator!='')
    accumulator+='-gi'
    else{
    accumulator='gi'
    }
    }
    if(number%5===0){
    if(accumulator!='')
    accumulator+='-oh'
    else{
    accumulator='oh'
    }
    }
    }
    else{
    accumulator=number
    }
    arrayN.push(accumulator)
    }
    console.log(arrayN);
    }
    myCal(10)
    
    
        
    