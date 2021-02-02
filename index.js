const express = require('express')
const app = express();
const ejs = require('ejs')

//set up view engine
app.set('view engin', 'ejs')

app.get('/', (req, res)=> {
    const superBowlObject = {
        tom: 'Tom Brady',
        patrick: "Patrick Mahomes"
    }
    res.render('index.ejs', superBowlObject)
})

app.get('/positions', (req, res)=> {
    const positionsArr = ['quarterback', 'runningback', 'wide reciver']
    res.render('positions.ejs', { positionsArr })
})

const PORT = process.env.PORT || 8000

app.listen(PORT, ()=>{
    console.log(`Server running on port, ${PORT}`)
})