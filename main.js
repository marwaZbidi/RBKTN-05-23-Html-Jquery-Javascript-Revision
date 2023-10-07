function each(array, func) { 
  for (var i = 0; i < array.length; i++) { 
        func(array[i], i); 
  } 
}

function map(array, f) { 
  var acc = []; 
  each(array, function(element, i) { 
        acc.push(f(element, i)); 
  }); 
  return acc; 
}

function filter(array, predicate) {
var acc = [];
each(array, function (element, index) {
 // notice we added the index here
 if (predicate(element, index)) {
   // notice we added the index here
   acc.push(element);
 }
});
return acc;
}

function reduce(array, f, acc) {
if (acc === undefined) {
 acc = array[0];
 array = array.slice(1);
}
each(array, function (element, i) {
 acc = f(acc, element, i);
});
return acc;
}
function generateID() {
  var count = 0;
  return function () {
    return count++;
  };
}
var id = generateID();
function makeSomthing(price,name,images,category){
  return{
    price:price,
    name:name,
    images:images,
    category:category,
    date:new Date(),
    id:id(),
  }
}

var car1=makeSomthing(200,"bmw",["https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/home/bmw-m-dex-stage-index-01.jpg.asset.1693838088859.jpg","https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/brands/bmw_i/2023/230201_BMW_Group_BMW_i4eDrive40.png"],"sports car")
console.log(car1)
$('#shop').append(`<h3>${car1.name}</h3>
<img src=${car1.images[0]} id="img1">
<p>Price : ${car1.price}</p>
`)
function changeimg (item){
  var counter=0
  function getnext(){
    counter++
    counter=counter%item.length
    return item[counter]
  }
  return getnext
}
var change=changeimg(car1.images);
$('#img1').on('click',function(){
  var getnextindex=change()
  this.src=getnextindex
})
function MakeShop(name){
return { name:name, 
list:[],
add:add,
removeElement:removeElement ,
update:update,
categoryFilter:categoryFilter,
sortByPrice:sortByPrice,
sortByDate:sortByDate
}
}
var add=function(price,name,images,category){
  var item=makeSomthing(price,name,images,category)
  this.list.push(item)
}
var removeElement=function(id){
 this.list =  filter(this.list,function(e,i){
    return e.id!==id
  })
}
var update=function(id,prop,value){
this.list=map(this.list,function(e,i){
  if(e.id===id)
  {this.list[i][prop]=value}
  return e
})
}
var categoryFilter=function(catgry){
return filter(this.list,function(e,i){
  return catgry===e.category
})
}
var sortByPrice=function(){
  this.list.sort(function(a,b){
    return a.price-b.price
  })
}
var sortByDate=function(){
  this.list.sort(function(a,b){
    return a.date.getTime()-b.date.getTime()
  })
}
function display(item){
  $('#shop').append(`<h3>${item.name}</h3>
<img src=${item.images[0]} id="img1">
<p>Price : ${item.price}</p>
`)
}
var shop=MakeShop("str")
shop.add(200,"bmw",["https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/home/bmw-m-dex-stage-index-01.jpg.asset.1693838088859.jpg","https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/brands/bmw_i/2023/230201_BMW_Group_BMW_i4eDrive40.png"],"sports car")
shop.add(200,"bmw",["https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/home/bmw-m-dex-stage-index-01.jpg.asset.1693838088859.jpg","https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/brands/bmw_i/2023/230201_BMW_Group_BMW_i4eDrive40.png"],"sports car")
each(shop.list,function(e,i){
  display(e)
})