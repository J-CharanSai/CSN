const express = require('express')
const app = express();
const mysql = require('mysql');
const cors = require('cors');
// const { default: Movie } = require('../client/src/components/Movie');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sunny#0145',
    database: "csn_database",
});


app.post("/signup", (req, res) => {
    console.log("signup")
    const emailid = req.body.emailid;
    const password = req.body.password;
    const userid = req.body.userid;
    db.query(
        "SELECT * FROM user WHERE user_emailid = ?", [emailid],
        (err, result) => {
            if (err) {
                res.send({  Message : "Uanable to coonect to database "});
            }
            if (result.length !== 0 ) {
                res.send({ Message: "Email already exists" });
            }
            else {
                if (emailid.length > 0 && userid.length > 0 && password.length > 0) {
                    db.query(
                        "INSERT INTO user (user_id,user_emailid,user_password) VALUES (?,?,?)", [userid, emailid, password],
                        (err1, res1) => {
                            if (err1) {
                                res.send({ Message : "Uanable to coonect to database "});
                            }
                            if (res1) {
                                res.send({ Message: "User registered sucessfully" });
                            }
                            else {
                                res.send({ Message: "Error in registering try again later" });
                            }
                        }
                    );
                }
            }
        }
    );
});

app.get("/home", (req, res) => {
    console.log("films listing");
    db.query(
        "SELECT * FROM movie",
        (err, result) => {
            if (err) {
                res.send({ err: 1, data : null });
            }
            if (result.length !== 0) {
                res.send({ err: 0, data: result });
            }
            else {
                res.send({ err : 1,data : "No movies are in the data base" });
            }
        }
    );
});

app.post("/signin", (req, res) => {
    console.log("signin")
    const emailid = req.body.emailid;
    const password = req.body.password;

    db.query(
        "SELECT * FROM user WHERE user_emailid = ?", [emailid],
        (err, result) => {
            if (err) {
                res.send({ err: 1, result : "error in connection" });
            }
            if (result.length !== 0) {
                if (password.localeCompare(result[0].user_password) === 0) {
                    res.send({ err: 0, result: result[0] });
                    console.log({ err: 0, result: result[0] });
                }
                else {
                    console.log({ err: 1, result: "Password is Incorrect" });
                    res.send({ err: 1, result: "Password is Incorrect"});
                }
            }else
            {
                res.send({err : 1, result: "No such User exits!" });
            }
        }
    );
});


app.get("/lists", (req, res) => {
    console.log("finding lists");
    db.query(
        "SELECT * FROM list",
        (err, result) => {
            if (err) {
                res.send({ err: 1, data: null });
            }
            if (result.length !== 0) {
                res.send({ err: 0, data: result });
            }
            else {
                res.send({ err: 1, data: "No lists found in the data base" });
            }
        }
    );
});

app.get("/actor", (req, res) => {
    console.log("fetching actor info")
    const actor = req.body.actor;

    db.query(
        "SELECT * FROM actor WHERE actor_id = ?", [actor],
        (err, result) => {
            if (err) {
                res.send({ err: 1, data: null });
            }
            if (result.length !== 0) {
                res.send({ err: 0, data: result });
            }
            else {
                res.send({ err: 1, data: "actor not found in the data base" });
            }
        }
    );
});

app.get("/cast", (req, res) => {
    console.log("fetching cast info")
    const movie_id = req.body.movie_id;

    db.query(
        "SELECT * FROM actor as ac LEFT OUTER JOIN cast as ca ON ca.actor_id = ac.actor_id WHERE ca.movie_id = ?",[movie_id],
        (err, result) => {
            if (err) {
                res.send({ err: 1, data: null });
            }
            if (result.length !== 0) {
                console.log(result);
                res.send({ err: 0, data: result });
            }
            else {
                res.send({ err: 2, data: "No cast in database for this film" });
            }
        }
    );
});

app.get("/movie", (req, res) => {
    console.log("fetching cast info")
    const movie_id = req.query.mv_id;
    console.log(movie_id);
    // const movie_id = 3;

    db.query(
        "SELECT * FROM movie WHERE movie_id = ?", [movie_id],
        (err0, result0) => {
            if (err0) {
                res.send({ err: 1, data : "No movie data", cast: null });
            }
            if (result0.length !== 0) {
                db.query(
                    "SELECT re.R_movie_id,re.R_user_emailid,ur.user_id,re.rating, re.date_added,re.review_text FROM review as re , user as ur WHERE re.R_user_emailid = ur.user_emailid AND re.R_movie_id = ?",[movie_id],
                    (err2,res2) =>{
                        if(err2)
                        {
                            res.send({err : 1, data : result0, reviews : "err in fetching reviews"});
                        }
                        if(res2.lenght !== 0){
                            db.query(
                                "SELECT * FROM actor as ac LEFT OUTER JOIN cast as ca ON ca.actor_id = ac.actor_id WHERE ca.movie_id = ?", [movie_id],
                                (err, result) => {
                                    if (result.length !== 0) {
                                        res.send({ err: 0, data : result0, cast: result, reviews : res2 });
                                        }
                                    if (result.length === 0) {
                                        res.send({ err: 2, data : result0, cast: "No cast Found for this film" , reviews : res2});
                                    }
                                }
                            );
                        }
                        else{
                            db.query(
                                "SELECT * FROM actor as ac LEFT OUTER JOIN cast as ca ON ca.actor_id = ac.actor_id WHERE ca.movie_id = ?", [movie_id],
                                (err, result) => {
                                    if (result.length !== 0) {
                                        res.send({ err: 0, data : result0, cast: result, reviews : [] });
                                        }
                                    if (result.length === 0) {
                                        res.send({ err: 2, data : result0, cast: "No cast Found for this film" , reviews : [] });
                                    }
                                }
                            );
                        }
                    }
                );

            }
            if (result0.length === 0) {
                res.send({ err: 1, data : "No movie found in database", cast: null, reviews: null });
            }
        }
    );

    
});

app.get("/profile", (req,res ) => {
    console.log("profile");
    const user_emailid = req.query.emailid;
    // console.log(req.query);
    // const user_emailid = "sunnyj6702@gmail.com"
    db.query(
        "SELECT * FROM review as re, movie as mv WHERE re.R_movie_id = mv.movie_id AND re.R_user_emailid = ? ORDER BY re.date_added DESC",[user_emailid],
        (err,result)=>{
            console.log(result);
            if(err){
                res.send({err : 1,data : "Error while fetching"});
            }
            else{
                db.query(
                    "SELECT * FROM list WHERE user_emailid = ?",[user_emailid],
                    (err1,res1) => {
                        if(err1)
                        {
                            res.send({err : 1,data : "Error while fetching lists"});
                        }
                        else{
                            // res.send({err : 0, data : result, reviews : result.length, lists_len : res1.length,lists : res1});
                            db.query(
                                "SELECT * FROM movie as mv LEFT OUTER JOIN watchlist as wl ON wl.WL_movie_id = mv.movie_id WHERE wl.WL_user_emailid = ?",[user_emailid],
                                (err2,res2) => {
                                    if(err2)
                                    {
                                        res.send({err : 1,data : "Error while fetching Watch List "});
                                    }
                                    else{
                                        res.send({err : 0, data : result, reviews : result.length, lists_len : res1.length,lists : res1, watchlist: res2});
                                    }
                                }
                            );
                        }
                    }
                );
            }
        }
    );
})

app.post("/addmovie", (req, res) => {
    console.log("adding movie");
    const MovieTitle= req.body.MovieTitle;
    const RYear= req.body.RYear;
    const Language= req.body.Language;
    const Genre= req.body.Genre;
    const Country= req.body.Country;
    const Des= req.body.Des;
    const Source= req.body.Source;

    db.query(
        "INSERT INTO movie (movie_title,release_date,language,genre,country,description,source) VALUES (?,?,?,?,?,?,?)",
        [MovieTitle,RYear,Language,Genre,Country,Des,Source],
        (err, result) =>{
            if(err){
                res.send({err : 1, data:"Unable to insert data"});
            }
            else{
                res.send({err: 0 , data:"Movie added Sucessfully"});
            }
        }
    );
});

app.post("/addreview", (req, res) => {
    console.log("Adding Review");
    const user_id= req.body.user_id;
    const rating= req.body.rating;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    console.log(today)
    const date_added= today;
    const movie_id= req.body.movie_id;
    const review_text= req.body.review_text;
    console.log(req.body)
    db.query(
        "SELECT * FROM review WHERE R_user_emailid = ? AND R_movie_id = ?",[user_id,movie_id],
        (err,result) =>{
            if(result.length === 0){
                db.query(
                    "INSERT INTO review (R_movie_id, R_user_emailid, rating, date_added, review_text) VALUES (?,?,?,?,?) ",
                    [movie_id,user_id,rating,date_added,review_text],
                    (err, res1) =>{
                        console.log(err);
                        if(err){
                            res.send({err : 1, data:"Unable to insert data"});
                        }
                        else{
                            res.send({err: 0 , data:"Movie added Sucessfully"});
                        }
                    }
                );
            }
        }
    )
    
});

app.post("/addtowatchlist", (req, res) => {
    console.log("Adding to watchlist");
    const user_id= req.body.user_id;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    console.log(today)
    const date_added= today;
    const movie_id= req.body.movie_id;
    console.log(req.body)
    db.query(
        "SELECT * FROM watchlist WHERE WL_user_emailid = ? AND WL_movie_id = ?",[user_id,movie_id],
        (err,result) =>{
            if(result.length === 0){
                db.query(
                    "INSERT INTO watchlist (WL_movie_id, WL_user_emailid, date_added) VALUES (?,?,?) ",
                    [movie_id,user_id,date_added],
                    (err, res1) =>{
                        console.log(err);
                        if(err){
                            res.send({err : 1, data:"Unable to insert data"});
                        }
                        else{
                            res.send({err: 0 , data:"Movie added Sucessfully"});
                        }
                    }
                );
            }
        }
    )
    
});



app.listen(3001, () => {
    console.log("running");
});