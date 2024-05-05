const myLibrary = ["ehe","tehe"];
const insertBtn = document.querySelector('.insert');
const book = document.querySelector('#book');
const content = document.querySelector('.book-wrapper')

function addBookToLibrary(buko) {
    myLibrary.push(buko);
}

insertBtn.addEventListener('click',function(){
    if(book.value){
        addBookToLibrary(book.value);
    }
    else{
        alert("Empty input");
    }
});

myLibrary.forEach(book => {
    let card = document.createElement("div");
    let header = document.createElement("h1");
    let para = document.createElement("p");
    let remove = document.createElement("button");
    remove.classList.add("delet");
    card.classList.add("card");
    content.appendChild(card);
    card.appendChild(header);
    card.appendChild(para);
    para.textContent = book;
});