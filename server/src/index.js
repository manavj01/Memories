import express from 'express';
import mongoose  from 'mongoose';
import cors from 'cors';

const app = express();

const CONNECTION_URL = "mongodb+srv://manavj0120:manavj0120@cluster0.uugto.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(()=> app.listen(PORT, ()=> console.log(`Server Running on port: ${PORT}`)))
    .catch((error)=> console.log(error.message));

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.get('/test', (req, res) => {
    res.json({
        hi: "there"
    })
})

// mongoose.set('useFindAndModify', false);