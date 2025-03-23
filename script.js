//your JS code here. If required.
let title = document.getElementById("title")
    let author = document.getElementById("author")
    let isbn = document.getElementById("isbn")
    let table = document.querySelector("table")
    let tbody = document.getElementById("book-list")

    let form = document.querySelector("form")
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        
    });


    let addBtn = document.getElementById("submit")

    addBtn.addEventListener("click", insertRow)

    function insertRow(e) {

        e.preventDefault();
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        td1.innerText = title.value
        let td2 = document.createElement("td")
        td2.innerText = author.value
        let td3 = document.createElement("td")
        td3.innerText = isbn.value
        let td4 = document.createElement("td")
        let deleteBtn = document.createElement("button")
        deleteBtn.className = "delete"
        deleteBtn.innerText = "Clear"
        deleteBtn.addEventListener("click", deleteRow);

        td4.append(deleteBtn);

        tr.append(td1, td2, td3, td4);
        tbody.append(tr);
        
    }

    function deleteRow(e){
        e.target.closest("tr").remove();
    }