import musicService from "../services/music.service.js"
import saveHistory from "../services/saveHistory.service.js";

async function search(req, res){

    try{

        const music = req.query.music
        const data = await musicService.search(music);

        await saveHistory(req.query)

        res.json(data);

    }
    catch(error){

        res.status(500).json({
            error: error.message
        });
        
    }
}

export default {search}