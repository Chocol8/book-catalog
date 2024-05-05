const myLibrary = ["ehe","tehe"];
const insertBtn = document.querySelector('.insert');
const book = document.querySelector('#book');
const content = document.querySelector('.book-wrapper');
const nu = document.querySelector(".new");
const foam = document.querySelector(".foam");
const close = document.querySelector(".close");

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

nu.onclick = function(){
    foam.showModal();
    foam.disabled = true;
}

close.onclick = function(){
    foam.close();
}

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