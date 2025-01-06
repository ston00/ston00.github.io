const express = require('express');
var bodyParser = require('body-parser');
const supabaseClient = require('@supabase/supabase-js');
const app = express();
const port = 3000;
app.use(bodyParser.json())
//Add + '/public' if doesnt work
app.use(express.static(__dirname))

const supabaseUrl = 'https://bktjuconzjxznmhnxdwg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrdGp1Y29uemp4em5taG54ZHdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1MTUxNzksImV4cCI6MjAxNjA5MTE3OX0.r07DLaHO3sg9vq8tmmNBlm9ucErvRzJSj5K1jINv0a4';
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

app.get('/', (req, res) => {
    res.sendFile('groceriesdb.js', {root:__dirname});
});

app.get('/getting', async(req, res) => {
    console.log('Getting Groceries');

    const {data, error} = await supabase
        .from('Groceries')
        .select();
    if(error) {
        console.log(error);
    } else if(data) {
        res.send(data);
    }
});

app.post('/adding', async (req, res) => {
    console.log('Adding groceries');

    var groceryItem = req.body.groceryItem
    var itemCount = req.body.itemCount;
    var aisle = req.body.aisle;
    var dateSold = req.body.dateSold;

    const {data, error} = await supabase
    .from('Groceries')
    .insert([
        {'item': groceryItem, 'item_count': itemCount, 'aisle': aisle, 'date_sold': dateSold}
    ])
    .select();

    console.log(data)
    
    res.header('Content-type', 'application/json')
    res.send(data)
});

app.listen(port, ()=> {
    console.log('App is up');
});