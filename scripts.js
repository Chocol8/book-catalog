const myLibrary = [];
const insertBtn = document.querySelector('.insert');

function addBookToLibrary(buko) {
    myLibrary.push(buko);
}

insertBtn.addEventListener('click',function(){
    const book = document.querySelector('#book');
    if(book.value){
        addBookToLibrary(book.value);
    }
    else{
        alert("Empty input");
    }
});