// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContr = document.querySelector(".header-container");

function Header() {
    const div = document.createElement("div");
    div.classList.add("header");

    const spanDate = document.createElement("span");
    spanDate.classList.add("date");
    spanDate.textContent = "MARCH 29, 2019";
    div.appendChild(spanDate);

    const h1 = document.createElement("h1");
    h1.textContent = "Lambda Times";
    div.appendChild(h1);

    const spanTemp = document.createElement("span");
    spanTemp.classList.add("temp");
    spanTemp.textContent = "98°";
    div.appendChild(spanTemp);

    return div;

}

headerContr.appendChild(Header());