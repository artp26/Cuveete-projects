const foodJson = require("./food.json");



// 1-all the food items
let allitems = foodJson.map(items=>{
    return (items.foodname);
});
console.log(allitems);


//2-all the food items with category vegetables
let allvegetableitems = foodJson.filter(items =>{
    return (items.category === "Vegetable");
});
console.log(allvegetableitems);


//3-all the food items with category fruit
let allfruitsitems = foodJson.filter(items =>{
    return(items.category === "Fruit");
});
console.log(allfruitsitems);


//4-all the food items with category protien
let allproteinsitems = foodJson.filter(items =>{
    return (items.category === "Protein");
});
console.log(allproteinsitems);


//5- all the food items with category nuts
let allnutsitems = foodJson.filter(items =>{
    return(items.category === "Nuts");
});
console.log(allnutsitems);


//6-all the food items with category grains
let allgrainsitems = foodJson.filter(items=>{
    return(items.category === "Grain");
});
console.log(allgrainsitems);


//7- all the food items with category dairy
let alldairyitems = foodJson.filter(items=>{
    return(items.category === "Dairy");
});
console.log(alldairyitems);


//8all the food items with calorie above 100
let highprotien = foodJson.filter(items=>{
    return(items.calorie>100);
});
console.log(highprotien);


//9-all the food items with calorie below 100
let lowprotien = foodJson.filter(items=>{
    return(items.calorie<100);
});
console.log(lowprotien);


//10-all the food items with highest protien content to lowest
let sortprotien = foodJson.sort((l,h)=>{
    return (h.protiens - l.protiens);
});
console.log(sortprotien);


//11- all the food items with lowest cab content to highest
let sortcabs = foodJson.sort((l,h)=>{
    return (l.cab - h.cab );
});
console.log(sortcabs);