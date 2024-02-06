module.exports=(req,res,next)=>{
    
    console.log("I'm security manager")
    next()
}