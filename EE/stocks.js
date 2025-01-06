async function top5() {
    var table = document.getElementById("top5Id");
    stock = fetch('https://tradestie.com/api/v1/apps/reddit')
        .then((res) => res.json())
        .then((res) => {

            for(let x = 0; x < 5; x++){    
                var row = document.createElement("tr");
                var tickerInfo = document.createElement("td");
                var commentCount = document.createElement("td");
                var sentiment = document.createElement("td");

                tickerInfo.innerHTML = `<a href=https://finance.yahoo.com/quote/${res[x].ticker}>${res[x].ticker}</a>`;
                commentCount.innerHTML = res[x].no_of_comments;
                if(res[x].sentiment == 'Bullish') {
                    //Bullish
                    sentiment.innerHTML = `<img style='width=50px; height=50px;' src='images/bullish.png' >`
                } else {
                  //Bearish
                    sentiment.innerHTML = `<img style='width=50px; height=50px;' src='images/bearish.png'>`
                }
                
                row.appendChild(tickerInfo);
                row.appendChild(commentCount);
                row.appendChild(sentiment);

                table.children[0].appendChild(row);
                }
            });
            await stock
        }
window.onload = top5

function stockSearch() {
    var y = 0;
    const stocksTicker = document.getElementById("tickerSymbol").value;
    //Current Date as YYYY-MM-DD
    var currentDate = new Date().toISOString();
    currentDate = currentDate.substring(0, currentDate.indexOf('T'));
    //Time Span 30/60/90
    var date = new Date();
    var today = new Date();
    today = today.toISOString();
    today = today.substring(0, today.indexOf('T'));
    console.log(today);
    var month = date.setMonth(date.getMonth() - 1);
    var twoMonth = date.setMonth(date.getMonth() - 1);
    var threeMonth = date.setMonth(date.getMonth() - 1);
    //month
    month = new Date(month);
    month = month.toISOString();
    month = month.substring(0, month.indexOf('T'));
    //two months
    twoMonth = new Date(twoMonth);
    twoMonth = twoMonth.toISOString();
    twoMonth = twoMonth.substring(0, twoMonth.indexOf('T'));
    //three months
    threeMonth = new Date(threeMonth);
    threeMonth = threeMonth.toISOString();
    threeMonth = threeMonth.substring(0, threeMonth.indexOf('T'));
    //Select
    var timeperiod = document.getElementById('time-period').value;
    var twoMonthSelect = document.getElementById('twoMonth');
    var threeMonthSelect = document.getElementById('threeMonth');
    // Chart works with:
    //https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=MuzKhCJjIyDbbcHpuVA1lfxkGVhRGvpE
    
    console.log(month);
    //https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/${month}/${currentDate}?adjusted=true&sort=asc&limit=120&apiKey=MuzKhCJjIyDbbcHpuVA1lfxkGVhRGvpE
      //lookup = fetch(`https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=MuzKhCJjIyDbbcHpuVA1lfxkGVhRGvpE`)
      lookup = fetch(`https://api.polygon.io/v2/aggs/ticker/${stocksTicker}/range/1/day/${month}/${today}?adjusted=true&sort=asc&limit=120&apiKey=MuzKhCJjIyDbbcHpuVA1lfxkGVhRGvpE`)
        .then((resp) => resp.json())
        .then((resp) => {
        console.log(resp);
        var startDate = resp['results'];
                
        for(let x = 0; x < 10; x++) {
          var axes = startDate[x].t;
          axis = new Date(axes);
          axis = axis.toISOString();
          axis = axis.substring(0, axis.indexOf('T'));
          console.log(axis);
        
          yaxes = startDate[x].c;
          console.log(yaxes);
          xlabels = [];
          ylabels = [];
          //Current 
          index = Object.values(startDate);
          console.log(Object.values(startDate));

          index.forEach(element => {
            //Labels
            ylabels.push(element.c);
            xaxis = new Date(element.t);
            xaxis = xaxis.toISOString();
            xaxis = xaxis.substring(0, xaxis.indexOf('T'));
            xlabels.push(xaxis);
          });
          console.log(startDate[x].data);
        }

        const ctx = document.getElementById('stocksChart');
  
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: xlabels,
            datasets: [{
              label: 'Stock Price',
              data: ylabels,
              borderWidtd: 1
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
              
        //startDate.forEach((element) => { }); 
        
    });
  }
//window.onload = stockSearch
window.onload = stockSearch()