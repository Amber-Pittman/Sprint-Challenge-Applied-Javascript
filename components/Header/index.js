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

function Header(attr) {
    const div = document.createElement("div");
    div.classList.add("header");

    const spanDate = document.createElement("span");
    spanDate.classList.add("date");
    spanDate.textContent.add("MARCH 28, 2019");

    const h1 = document.createElement.add("h1");
    h1.textContent.add("Lambda Times");

    const spanTemp = document.createElement("span");
    spanTemp.classList.add("temp");
    spanTemp.textContent.add("98°");

}