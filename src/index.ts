import Db from "Db";

import express, { urlencoded, json } from 'express'
import cors from "cors"

import Routes from "Routes";

const app = express()

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))

Db()
    .then(async ({ conn }) => {

    const port = process.env.PORT ?? 5000

    app.use("/", Routes({ conn }))

    app.listen(port, () => console.log("Api running on port ", port))

}).catch(error => console.log(error));
