import getHistory from "../services/getHistory.service.js"

export default async function historyController(req, res){
    try{
        const {history} = await getHistory()
        res.json(history)
    }
    catch(error){
        res.status(500).json({
            error: error.message
        });
            
    }
}