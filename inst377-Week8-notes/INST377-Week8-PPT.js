// Put the Currency into the Labels

// Put the USD Rate into Data

async function getData() {
    // Get Data from the API
    var data = await fetch("https://api.coincap.io/v2/assets")
        .then((response) => response.json());
    var objectData = data.data
    labels = []
    prices = []
    objectData.forEach(element => {
        if(element.priceUsd >100 & element.priceUsd < 250) {
            labels.push(element.symbol)
            prices.push(element.priceUsd)
        }
    });

    console.log('Labels:', labels)
    console.log('Prices:', prices)

    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                label: 'USD Rate',
                data: prices,
                borderWidth: 0
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

}

window.onload = getData;

