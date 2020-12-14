var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

$(document).ready(() => {
    const tableBody = document.getElementById('table-body');
    const tableData = [];
    $.get(url, (tableData) => {
        // console.log(tableData);
        tableData.map((item, pos) => {

            tableBody.appendChild(createTableRow(item));
        });
    })

    const createTableRow = (data) => {
        //     const tableRow = `  <tr class="data-row id="${data.id}">
        //     <td  class="column1">${data.id}</td>
        //     <td  class="column2">${data.firstName}</td>
        //     <td  class="column3">${data.lastName}</td>
        //     <td  class="column4">${data.email}</td>
        //     <td  class="column5">${data.phone}</td>
        // </tr>`;


        const tableRow = document.createElement('tr');
        tableRow.className = 'data-row ';
        tableRow.id = data.id;


        const column1 = document.createElement('td');
        column1.className = 'column1';
        column1.innerHTML = data.id;
        tableRow.appendChild(column1);

        const column2 = document.createElement('td');
        column2.className = 'column2';
        column2.innerHTML = data.firstName;
        tableRow.appendChild(column2);

        const column3 = document.createElement('td');
        column3.className = 'column3';
        column3.innerHTML = data.lastName;
        tableRow.appendChild(column3);

        const column4 = document.createElement('td');
        column4.className = 'column4';
        column4.innerHTML = data.email;
        tableRow.appendChild(column4);

        const column5 = document.createElement('td');
        column5.className = 'column5';
        column5.innerHTML = data.phone;
        tableRow.appendChild(column5);
        // console.log(tableRow);

        tableRow.onclick = function() {
            renderingUserDetails(data);
            removeClass();
            tableRow.classList.add('active');

        }

        return tableRow;
    }

    const userName = document.getElementById('user-selected');
    const description = document.getElementById('description');
    const address = document.getElementById('address');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const zip = document.getElementById('zip');


    const renderingUserDetails = (item) => {
        userName.innerHTML = `<b>User selected:</b> ${item.firstName} ${item.lastName}`;
        description.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quia nihil. Est, illum minima libero rerum, nihil distinctio placeat sint nam quae repellendus obcaecati delectus totam non odio. Sint, reprehenderit?`;
        address.innerHTML = `<b>Address:</b> ${item.address.streetAddress}`
        city.innerHTML = `<b>City:</b> ${item.address.city}`;
        state.innerHTML = `<b>State:</b> ${item.address.state}`;
        zip.innerHTML = `<b>Zip:</b> ${item.address.zip}`;
    }

    const removeClass = () => {
        tableData.map(item => {
            document.getElementById(item.id).classList.remove('active');
            console.log(item.id);
        });
    }

});