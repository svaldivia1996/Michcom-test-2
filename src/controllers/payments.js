
exports.payments = async (req, res) =>{
    try{
        let payload = req.body
        res.json({
            success: true,
            response: payload
        })

    }
    catch (error){
        console.log(error)

        res.json({
            success: false
        })

    }
}