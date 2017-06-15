// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {
  'use strict';

  fetch('https://randomuser.me/api/?results=12&nat=us').then(
    function(response) {

      if (response.status !== 200) {
        console.log("There was an error" + response.status);
        return
      }

      response.json().then(function(data) {
        var customers = data.results;
        console.log(customers)


        function displayCustomers() {
          return `
            ${customers.map(customer => `
              <div id="customer">
                <ul>
                  <img src="${customer.picture.large}" />
                  <li class="name">${customer.name.first.toUpperCase()} ${customer.name.last.toUpperCase()}</li>
                  <li>${customer.email}</li>
                  <li>${customer.cell}</li>
                </ul>
              </div>
            `).join('')}
          `
        }

        let markup = `
        <h1>INTERNAL COMPANY DIRECTORY</h1>

          <div class="customers">
            ${displayCustomers()}
          </div>
        `

        document.body.innerHTML = markup;
      })
    })


})();
