const myLibrary = [];
const content = document.querySelector('.book-wrapper');
const nu = document.querySelector(".new");
const foam = document.querySelector(".foam");
const closed = document.querySelector(".close");
const sub = document.querySelector('.submit');
let bookNum = 1;

function book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let sample1 = new book('sample1','auth',2024,'yes');
let sample2 = new book('sample2','auth1',2023,'yes');

function addBookToLibrary(buko) {
    myLibrary.push(buko);
}

addBookToLibrary(sample1);
addBookToLibrary(sample2);

nu.onclick = function(){
    foam.showModal();
    foam.disabled = true;
}

closed.onclick = function(){
    foam.close();
}

sub.addEventListener("click",function(){
    const title = document.querySelector('#title');
    

    myLibrary.push();
});

myLibrary.forEach(book => {
    let card = document.createElement("div");
    let titleHeader = document.createElement("h1");
    let author = document.createElement("p");
    let pages = document.createElement("p");
    let isRead = document.createElement("p");
    let remove = document.createElement("button");
    remove.classList.add("delet");
    card.classList.add("card");
    titleHeader.classList.add("title-header");
    content.appendChild(card);
    card.appendChild(titleHeader);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(isRead);
    card.appendChild(remove);
    remove.textContent = `remove`;
    titleHeader.textContent = book.title;
        author.textContent =  `Author: ` + book.author;
        pages.textContent = `Number of pages: ` + book.pages;
        isRead.textContent = `Is read: ` + book.read;
});