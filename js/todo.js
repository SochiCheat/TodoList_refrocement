let todoList = [
    {name:"Javascript"},
    {name:"PHP"},
    {name:"Java"},
    {name:"CMS"},
    {name:"Python"},
];
 const LIST_ELEMENT = document.querySelector("#list");
//     const todo =`
//         <li>${element.name}</li>
//     `;

// LIST_ELEMENT.insertAdjacentHTML("beforeend",todo);
// document.addEventListener('keydown',event => {
//     if(event.key === "Enter" )
//         // alert("you press enter key");
//         {
//     }
// });
// const INPUT_ELEMENT = document.querySelector('input');
// document.addEventListener('keydown',event=>{
//     console.log(INPUT_ELEMENT.value);
// });
const INPUT_ELEMENT = document.querySelector('input');
document.addEventListener('keydown',event=>{
    if (event.key === "Enter") {
        let isNotEmpty = INPUT_ELEMENT.value != ""
        if (isNotEmpty) {
         toDO(INPUT_ELEMENT.value)
    }
    INPUT_ELEMENT.value="";
    } 
});
 
 function toDO(todo) {
    const todos =`
        <li>${INPUT_ELEMENT.value}</li>
        `;
// insertAdjacentHTML aj oy yerg display jeh tv krv ban 
        LIST_ELEMENT.insertAdjacentHTML("beforeend",todos);     
 }

 const options = {weekday:'long',year:'numeric',month:'long',day:'numeric'};
 const today = new Date();
 document.querySelector('h1').innerHTML = today.toLocaleString('zh-HK',options);
