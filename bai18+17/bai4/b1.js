let products = [{ id: 1, name: "Milk", count: 100},
 {id: 2, name: "Yakult", count: 100},
{id: 3, name: "Butter", count: 100,}
];

/* let obj={
    id:4,
    name:"hieu",
    count:100
}
products.push(obj);
console.log(products); */




/* 
for(let i=0 ;i<products.length;i++){
    if(products[i].id ==2 ){
        delete products[i]
    }
}console.log(products); */



for(let i=0;i<products.length;i++){
    if(products[i].id == 3){
        products[i].count= 0;
        break;
    }
}
console.log(products); 