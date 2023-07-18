//To design a DB for IMDB 

//Schema for Movies 
const mongoose = require('mongoose')
const movies = mongoose.Schema(
    {
        _id: ObjectId,
        title: String,
        release_date : Date,
        description : String,
        media : [
            {
                media_type : String,  //1
                media_url :  String
            },
            {
                media_type : String,  //2
                media_url :  String
            }
        ],
        genres: [String],
        reviews : [{
            user_id: ObjectId,          //1
            review_text: String,
            review_rating: Number
        },
        {
            user_id: ObjectId,         //2
            review_text: String,
            review_rating: Number
        }
    ]
    }
)




// we can add different collections like Artist, roles and so on 

/* Artist ==>   
    _id: ObjectId,
    name:String,
    skills:[String]
    
    Roles ==>
    _id: ObjectId,
    role_name:String
*/