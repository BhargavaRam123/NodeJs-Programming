import express from "express"

const app = express()
app.get(
    "/",()=>{
        console.log("hello world")
    }
)

app.listen(8000,()=>{
    console.log("server running on port 8000")
})