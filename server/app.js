const express = require('express');
const cors = require('cors')
const app = express();
const pgp = require('pg-promise')();
const http = require('http')
const connectionString = 'postgres://mevpubtl:EHk6n9pHK4crkCeGMa2Cg34xRjWC1CLb@raja.db.elephantsql.com/mevpubtl';
//const db = new pg.Client(connectionString);
const db = pgp(connectionString)
const bcrypt = require('bcryptjs');

app.use(express.json());
app.use(cors());


app.get('/register', (req, res) => {
    res.json()
})

app.post('/register', (req, res) => {
    
    const owner_first_name = req.body.owner_first_name;
    const owner_last_name = req.body.owner_last_name;
    const street_address = req.body.street_address;
    const city = req.body.city;
    const zipcode = parseInt(req.body.zipcode);
    const email = req.body.email;
    const mobile_phone = req.body.mobile_phone;
    const user_name = req.body.user_name;
    const password = req.body.password;

    db.oneOrNone('SELECT customer_id from users WHERE user_name = $1',[user_name], (err, result) => {
        console.log(result)
        console.log(err)
        if(result){
            res.status(400).json({message: 'User already exists'})
        }else{
            bcrypt.genSalt(10, function(error,salt){
                if(!error){
                    bcrypt.hash(password,salt, function(error,hash){
                        if(!error){
                            db.none('INSERT INTO users (owner_first_name, owner_last_name, street_address, city, zipcode, email, mobile_phone, user_name, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',[owner_first_name, owner_last_name, street_address, city, zipcode, email, mobile_phone, user_name, hash])
                            .then(() => {
                                res.json({message:"User has been registered"})
                            })
                        }else {
                            res.json({message:'Error Occured'})
        
                        }
                    })
                }
            })

        }
    })
   
})

app.post('/login', (req, res) => {
    const user_name = req.body.user_name;
    const password = req.body.password;

  db.one('SELECT customer_id, user_name, password FROM users WHERE user_name = $1', [user_name],)
      .then((user) => {
          console.log(user)
          bcrypt.compare(password, user.password, function(error, result){
              console.log(error)
            if(error){
                return res.status(401).json({
                    error: "Incorrect Username/Password"
                })
            }else {
                let customer = {
                    user_name: user.user_name,
                    customer_id: user.customer_id
                }
                res.status(200).json({success: true, message: "You have been authenticated!", user: customer})
            }
          })
      })
 })

 app.post('/add-pet', (req,res) => {
     console.log(req.body)
     const pet_name = req.body.pet_name
     const pet_breed = req.body.pet_breed
     const pet_gender = req.body.pet_gender
     const pet_fixed = req.body.pet_fixed
     const pet_medical = req.body.pet_medical
     const pet_weight = parseInt(req.body.pet_weight)
     const pet_age = parseInt(req.body.pet_age)
     const customer_id = req.body.customer_id

     db.none('INSERT INTO pets(pet_name, pet_breed, pet_gender, pet_fixed, pet_medical, pet_weight, pet_age, customer_id)VALUES($1, $2, $3, $4, $5, $6, $7, $8)', [pet_name, pet_breed, pet_gender, pet_fixed, pet_medical, pet_weight, pet_age, customer_id], (err, result) => {
         if (err){
             res.json({success: false, error:err})
         }else{
             res.json({success:true})
         }
     })
 })

 app.get('/pets', (req,res)=> {
     db.any('SELECT pet_id, pet_name, customer_id FROM pets')
     .then(pets => {
         console.log(pets)
         res.json({success:true, pet:pet_name})
     })
 })



db.connect();

http.createServer(app).listen(8080, () => {
    console.log('Server is running')
})