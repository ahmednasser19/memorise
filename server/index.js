import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/posts', postRoutes);
const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) console.log(err)
        else console.log("mongdb is connected");
    });

app.listen(PORT, () => console.log(`Up and running on port ${PORT}`));

mongoose.set('useFindAndModify', false);
