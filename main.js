let input = document.getElementById("userInput");
let home_div = document.getElementById("homeContent");
let searchInput = document.getElementById("searchInput");
let items = []
if (localStorage.getItem("allItems") != null) {
  items = JSON.parse(localStorage.getItem("allItems"));
  display();
}
function addItem() {
    if (input.value == "") {
        document.getElementById("alert").style.display = "block"
    }
    else {
    document.getElementById("alert").style.display = "none";
        items.push(input.value);
        display();
        input.value = ''
        localStorage.setItem('allItems', JSON.stringify(items))
    }
}
function display() {
    let bag = ``
    items.forEach((item,index) => {
        bag += `
        <div
                    class="home-item mb-2 rounded-pill text-dark mx-auto w-25 bg-danger d-flex justify-content-between
                    align-items-center">
                    <p id="item" class="m-0 p-0">${item}</p>
                    <i class="fa-sharp fa-solid fa-trash" onClick="deleteItem(${index})"></i>
                </div>
        `;
    })
home_div.innerHTML=bag
}
function deleteItem(index) {
    items.splice(index, 1)
display()
    localStorage.setItem('allItems',JSON.stringify(items))
}
searchInput.addEventListener('input', function (e) {
    search(e.target.value)
})
function search(value){
    let bag = ``
    items.forEach((item, index) => {
        if (item.toLowerCase().includes(value.toLowerCase())) {
            bag += `
        <div
                    class="home-item mb-2 rounded-pill text-dark mx-auto w-25 bg-danger d-flex justify-content-between
                    align-items-center">
                    <p id="item" class="m-0 p-0">${item.replace(value, `<span class="text-info">${value}</span>`)}</p>
                    <i class="fa-sharp fa-solid fa-trash" onClick="deleteItem(${index})"></i>
                </div>
        `;
        }
    })
home_div.innerHTML=bag
}