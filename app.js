const express = require('express');
const app = express();
const port = 2500;
const axios = require('axios');

require('dotenv').config();
const apiKey = process.env.WEATHER_API_KEY;
app.set('views');
app.set('view engine','ejs');

app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.render('home.ejs');
    });

    app.get('/weather',async(req,res)=>{
        res.render('weather',{weather:'',error:''});
    });

app.post('/weather',async(req,res) => {
    const city = req.body.city;
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        res.render('weather', { weather: response.data,error:'' });
    } catch (error) {
        console.error(error);
        res.render('weather', { weather: null, error: 'Unable to fetch weather data' });
    }
})

app.listen(port,() => {
    console.log(`server running at http://localhost:${port}`);
})











