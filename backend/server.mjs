import express, { urlencoded } from "express";
const app = express();

app.use(urlencoded({extended:true}));
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));
app.use(express.json());


const PORT = process.env.PORT || 8000;

const dummyDB =[];


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', "http://localhost:3000/");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });

app.get("/", (req,res)=>{
    res.send("This is a backend route please go localHost: 3000");
})


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
        console.log(req.body);
    })


    app.post("/api/addOne", (req,res)=>{
       try{
        dummyDB.push(req.body);
       }
       catch(e){
        console.log(Error(e.message));
       }



    })

    app.listen(PORT, ()=>{
        console.log(`listening on port: ${PORT}`);
    });

