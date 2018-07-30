// let mongoose = require('mongoose');
/* let UserService = require('./service'); */
// let jwt = require('jsonwebtoken');
// let config = require('../../../config/config');

let usersCollection = require('../singup/model')

let useradd = (req,res)=>{
    // console.log(req.body);
    usersCollection.find({ name : { $exists: true } })

        .then(
            (response)=>{
                // console.log(response)
                res.status(200).json({ status : true , message :"Success"  , addDetails:response});
            }
        )
        .catch(
            (error)=>{

                res.status(500).json({ status : false , message :"Error while creating userlist , please do again"   })
            }
        )
            
    
}

// let deleleteList = (req,res)=>{
//     // console.log(req.body);
//     usersCollection.deleteOne({ name : req.body.name})
//         .then(
//         (response)=>{
//             console.log(response);
//                 res.status(200).json({ status : true , message :"Success"  , addDetails:response})
//         })
//         .catch(
//                     (error)=>{
        
//                         res.status(500).json({ status : false , message :"Error while creating userlist , please do again"   })
//                     }
//                 )
            
//         }

let deleleteList = (req,res)=>{
    console.log(req.body);
    usersCollection.find({_id : req.body._id })
    .then(
        (response)=>{
            if(response._id==req.body._id){
                usersCollection.deleteOne({ _id : { $exists: true }})

                .then(
                    (response)=>{
                        console.log(response)
                        res.status(200).json({ status : true , message :"Success"  , addDetails:response});
                    }
                )
                .catch(
                    (error)=>{
        
                        res.status(500).json({ status : false , message :"Error while creating userlist , please do again"   })
                    }
                )
            }
        }
    )
   
            
}
    
   
            
    


let childUserlist= (req, res)=>{
    console.log(req.body);
    usersCollection.findById({ id : { $exists: true} })
    .then(
        (response)=>{
            console.log(response)
            res.status(200).json({ status : true , message :"Success"  , addDetails:response});
        }
    )
    .catch(
        (error)=>{

            res.status(500).json({ status : false , message :"Error while creating userlist , please do again"   })
        }
    )

}



module.exports = {
    useradd, deleleteList, childUserlist
}