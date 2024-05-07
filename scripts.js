const myLibrary = [];
const content = document.querySelector('.book-wrapper');
const nu = document.querySelector(".new");
const foam = document.querySelector(".foam");
const closed = document.querySelector(".close");
const sub = document.querySelector('.submit');

//form Elements
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector('#read');
const notRead = document.querySelector('#notRead');

function book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(buko) {
    myLibrary.push(buko);
}

nu.onclick = function(){
    foam.showModal();
    foam.disabled = true;
}

closed.onclick = function(){
    foam.close();
}

sub.addEventListener("click",function(event){
    if(title.value){
        if(author.value){
            if(pages.value){
                event.preventDefault();
                let readValue = `yes`;
                if(read.checked === true){
                    readValue = read.value;
                }else if(notRead.checked === true){
                    readValue = notRead.value;
                }
                let newBook = new book(title.value,author.value,pages.value,readValue);
                myLibrary.push(newBook);
                foam.close();
                let card = document.createElement("div");
                let titleHeader = document.createElement("h1");
                let authorText = document.createElement("p");
                let pagesText = document.createElement("p");
                let isRead = document.createElement("p");
                let buttonWrapper = document.createElement("div");
                let remove = document.createElement("button");
                let readButton = document.createElement("button");
                buttonWrapper.classList.add('buttonWrapper');
                readButton.classList.add("readButton");
                remove.classList.add(`delet`);
                card.classList.add("card");
                isRead.classList.add("readStatusText");
                titleHeader.classList.add("title-header");
                content.appendChild(card);
                card.appendChild(titleHeader);
                card.appendChild(authorText);
                card.appendChild(pagesText);
                card.appendChild(isRead);
                card.appendChild(buttonWrapper);
                buttonWrapper.appendChild(remove);
                buttonWrapper.appendChild(readButton);
                readButton.textContent = 'read';
                remove.textContent = `remove`;
                titleHeader.textContent = newBook.title;
                authorText.textContent =  `Author: ` + newBook.author;
                pagesText.textContent = `Number of pages: ` + newBook.pages;
                isRead.textContent = `Is read: ` + newBook.read; 
                title.value= '';
                author.value = '';
                pages.value = '';
                read.checked = true;
                let delet = document.querySelectorAll(".delet");
                for(let value = 0; value < delet.length; value++){
                    delet[value].onclick = function(){
                        delet[value].parentElement.parentElement.remove();
                        myLibrary.splice(value,1);
                    };
                }
                let readStatus = document.querySelectorAll(".readButton");
                let readStatusText = document.querySelectorAll(".readStatusText");
                for(let value = 0; value < readStatus.length; value++){
                    readStatus[value].onclick = function(){
                        if(myLibrary[value].read === `yes`){
                            myLibrary[value].read = `no`;
                            readStatusText[value].textContent = "Is read: no";
                        }
                        else if(myLibrary[value].read === `no`){
                            myLibrary[value].read = `yes`;
                            readStatusText[value].textContent = "Is read: yes";
                        }
                    };
                }
            }
        }
    }
});