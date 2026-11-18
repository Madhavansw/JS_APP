 const _bind = () => {
    console.log("Bind method");
 }
 const arr = [1,2,3,4,5];
 const _res = _bind.bind(null,...arr);
 console.log(_res());