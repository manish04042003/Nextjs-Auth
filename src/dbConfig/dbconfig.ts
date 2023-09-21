import mongoose from 'mongoose';


export async function connect() {
    try{
        mongoose.connect(process.env.NODE_ENV!)
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log('MongoDB connected successfully')
        })


        connection.on('error',(error)=>{
            console.log('MonngoDB error occur  : ',error)
            process.exit();
        })
    }catch(error){
        console.log('Something Went Wrong')
        console.log(error);
        
    }
    
}


