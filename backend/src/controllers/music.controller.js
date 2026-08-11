import musicService from "../services/music.service.js"

async function search(req, res){

    try{

        const music = req.query.music

        const data = await musicService.search(music);
        res.json(data);

    }
    catch(error){

        res.status(500).json({
            error: err.message
        });
        
    }
}

export default {search}