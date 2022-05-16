const addDate = (req, res, next)=>{
 const date = new Date() ;
 const hour = date.getHours()
 console.log(hour)

 const day = date.getDay()
 console.log(day)
 

 req.date = date ;
 if(day==0||day==6||hour<9||hour>17){
  return res.send("don''t have permissions") 
  } else {return res.send('welcome'), next()} ;


 }

module.exports = {addDate} 



