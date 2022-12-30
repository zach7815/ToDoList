import express, { urlencoded } from "express";
import mongoose from "mongoose";
import toDo from "./toDo.mjs";



const app = express();

app.use(urlencoded({extended:true}));
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', "http://localhost:3000/");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });

const PORT = process.env.PORT || 8000;

const dummyDB =[];

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/toDo',
    ()=>{ console.log("MongoDB connected");},
    (e)=>{console.log({error:e.message})}
    );
  };





app.get("/", (req,res)=>{
    res.send("This is a backend route please go localHost: 3000");
})

app.get("/api/loadtoDos",  async (req,res)=>{
    try{
       const toDos = await toDo.find();
        const toDoList= JSON.stringify(toDos);
       res.send(toDoList);
    }

        catch(error){
            console.log(error)
        }

});


    app.delete("/api/deleteOne", (req,res)=>{
        const deletedId =req.body.id;
        console.log(deletedId)

        try{
            dummyDB.map((item,index)=>{
                if(item.id===deletedId){
                dummyDB.splice(index,1);
            }
            else{
                return
            }
        })


        }
        catch(error){
                console.log(error)
        }
        finally{
            console.log(dummyDB)
        }





    })


    app.delete("/api/deleteComplete", (req,res)=>{
        try{
            dummyDB.map((item, index)=>{
                if(item.complete===true){
                   dummyDB.splice(index, 1)
                }
            })
            console.log(dummyDB)
        }

        catch(error){
            console.log(error)
        }
    })

    app.put("/api/completeOne", (req,res)=>{
       const completeOneID= req.body.id;
       try{
        dummyDB.map((item,index)=>{
            if (completeOneID===item.id){
                dummyDB[index].complete=!req.body.complete;
            }
        })


       }
       catch(error){
            console.log(error);
       }
    })


    app.post("/api/addOne",  async (req,res)=>{

       try{
     const todo=  await toDo.create({
            id:req.body.id,
            text: req.body.text,
            complete:req.body.complete
        })
        await todo.save().then(console.log("toDo saved"));
       }
       catch(e){
        console.log(Error(e.message));
       }



    })

    app.listen(PORT, ()=>{
        console.log(`listening on port: ${PORT}`);
    });

