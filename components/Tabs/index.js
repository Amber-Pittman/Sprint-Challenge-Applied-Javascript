/* Step 2: Create Tabs
-----------------------
Using axios send a GET request to the address:
 https://lambda-times-backend.herokuapp.com/topics
Once the data is returned console.log it and review the structure.
Iterate over the topics creating a new Tab component and add it to 
the DOM under the .topics element.

 The tab component should look like this:
   <div class="tab">topic here</div>
*/

const tabsContr = document.querySelector(".topics");

axios.get("https://lambda-times-backend.herokuapp.com/topics")
  .then((response) => {
      let newArray = response.data.topics;
      console.log(newArray);
      newArray.forEach(element => {
          tabsContr.appendChild(Tabs(element));
      });
  })
  .catch(error => {
      console.error(error);
      console.log("Network request unsuccessful");
  });

  function Tabs(response) {
      const tabs = document.createElement("div");
      tabs.classList.add("tab");
      tabs.textContent = response;

      return tabs;
  }