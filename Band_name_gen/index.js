import express from 'express'
import {dirname} from 'path'
import {fileURLToPath} from 'url'
import bodyParser from 'body-parser'
import { dir } from 'console'

const app = express()

const port = 3000
const _dirname = dirname(fileURLToPath(import.meta.url))

app.get("/", (req, res)=>{

    res.sendFile(_dirname+"/index.html")
})


