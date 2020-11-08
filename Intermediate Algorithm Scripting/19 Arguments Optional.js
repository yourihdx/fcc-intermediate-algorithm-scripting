function addTogether(a, b = null) {

    if((typeof(a) === 'number') && (typeof(b) === 'number')){
        return a + b;
    } else if ((typeof(a) === 'number') && (b === null)){
        return (c) => (typeof(c) === 'number')?a + c:undefined;
    }
    
    else return undefined;
  }
  
  console.log(addTogether(2,3));
  console.log(addTogether(2)(40));