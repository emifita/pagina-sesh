import getHistory from "../services/getHistory.service.js"

export default async function historyController(req, res){
    try{
        // Keep file access in the service and expose the saved entries as JSON.
        const {history} = await getHistory()
        res.json(history)
    }
    catch(error){
        res.status(500).json({
            error: error.message
        });
            
    }
}
