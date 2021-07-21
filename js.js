const listItem = document.querySelectorAll(".item");
const filteredName = document.querySelector("#filter");
// const contact = document.getElementById("contact");

let text = "";

filteredName.addEventListener("keydown", (e) => {
    // let input = filteredName.value.toUpperCase();
    text = `${text}${e.key}`;
    if (e.key == "Backspace") {
        text = text.slice(0, -10);
    }

    // forEach is slower thatn for loop
    // listItem.forEach(item => {
    //     console.dir(item);
    //     let name = item.children[0].innerText.toUpperCase();
    //     if (name.indexOf(text.toUpperCase()) > -1) {
    //         item.style.display = "";
    //     } else {
    //         item.style.display = "none";
    //     }
    // })

    for (let i = 0; i < listItem.length; i++) {
        let name = listItem[i].children[0].innerHTML.toUpperCase();
        if (name.indexOf(text.toUpperCase()) > -1) {
            listItem[i].style.display = "";
        } else {
            listItem[i].style.display = "none";
        }
    }

})