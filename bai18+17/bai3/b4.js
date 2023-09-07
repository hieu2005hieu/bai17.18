let studen = {
    id : 1,
    name : "Nguyen Van A",
    denger : "nam",
    age : 20,
    mark : 4,
}
let newstuden = {
    id : 2,
    name : "Nguyen Van B",
    denger : "nam",
    age : 21,
    mark : 5,
}
let studens = [studen,newstuden];
let newstuden2 ={
    id :3,
    name :"Nguyen Van C",
    denger : "nu",
    age : 23,
    mark : 6,
}
studens.push(newstuden2);
let diemTrungbinh=(newstuden.mark+newstuden2.mark+studen.mark)/3;
if(diemTrungbinh>7.5){
    console.log("lop kha");
}else if(diemTrungbinh>5 && diemTrungbinh<7){
    console.log("lop trung binh");
}else{
    console.log("lop yeu");
}


