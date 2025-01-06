async function getGrocery() {
    console.log('Creating Grocery Item')
    var host = window.location.origin;
    console.log('Host: ', host)
    var test = await fetch(`${host}/getting`, {
        method: 'GET',
        headers: {
            "Content-type": "application/json"
        }
    })
        .then((res) => res)
        .then(async res => {
            console.log(res)
            
            const element = document.getElementById('errorBox')
            if(element) {
                element.remove();
            }

            console.log('Status:', res.status)
            if (res.status == 200 || res.status == 304) {
                return res.json()
            }
            throw Error(JSON.stringify(await res.json()));
        })
        .then((res) => {
            console.log(res)
            const element = document.getElementById("groceryInfo");
            if (element) {
                element.remove();
            }

            var table = document.createElement('table');
            table.setAttribute('id', 'groceryInfo')

            var tableRow = document.createElement('tr');

            var tableHeading1 = document.createElement('th');
            tableHeading1.innerHTML = "Grocey Item"
            tableRow.appendChild(tableHeading1)

            var tableHeading2 = document.createElement('th');
            tableHeading2.innerHTML = "Item Count"
            tableRow.appendChild(tableHeading2)

            var tableHeading3 = document.createElement('th');
            tableHeading3.innerHTML = "Aisle"
            tableRow.appendChild(tableHeading3)

            var tableHeading5 = document.createElement('th');
            tableHeading5.innerHTML = "Date Bought"
            tableRow.appendChild(tableHeading5)

            table.appendChild(tableRow)
    
            document.body.appendChild(table)
            for (i = 0; i < res.length; i++) {
                var customerRow = document.createElement('tr');
                var groceryItem = document.createElement('td');
                var itemCount = document.createElement('td');
                var aisle = document.createElement('td');
                var dateSold = document.createElement('td');



                groceryItem.innerHTML = res[i].item;
                itemCount.innerHTML = res[i].item_count;
                aisle.innerHTML = res[i].item_type;
                dateSold.innerHTML = res[i].date_sold;

                customerRow.appendChild(groceryItem);
                customerRow.appendChild(itemCount);
                customerRow.appendChild(aisle);
                customerRow.appendChild(dateSold);

                table.appendChild(customerRow);
            }

        })
        .catch((error) => {
            //console.log('Error:', JSON.parse(error.message))
            var errorDiv = document.createElement('div')
            errorDiv.setAttribute('class', 'errorBox');
            errorDiv.setAttribute('id', 'errorBox')

            var h1 = document.createElement('h1');
            h1.innerHTML = `Error Ocurred:`

            var p = document.createElement('p');
            p.innerHTML = `${JSON.parse(error.message).message}`

            errorDiv.appendChild(h1);
            errorDiv.appendChild(p);
            document.body.appendChild(errorDiv)
        })
}


async function addGrocery() {
    console.log('Adding Item')
    var host = window.location.origin;
    console.log('Host: ', host)

    var test = await fetch(`${host}/adding`, {
        method: 'POST',
        body: JSON.stringify({
            "groceryItem": `${document.getElementById('groceryItem').value}`,
            "itemCount": `${document.getElementById('itemCount').value}`,
            "aisle": `${document.getElementById('aisle').value}`,
            "dateSold": `${document.getElementById('dateSold').value}`,
            
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    await getGrocery();
}

window.onload = getGrocery;