//let day = new Date();
//console.log(day.getDate());

//let days = ["sunday", "monday","tuesday","wednesday","thursday", "friday","saturday"];
//let now = new Date().getDay();
//console.log(days[now]);

let color = ["red" ,"purple","yellow"];
let background ="";
for(let i = 0;i < 1; i++){
background += color[Math.floor(Math.random() * color.length)];
}
document.body.style.backgroundColor=background;
