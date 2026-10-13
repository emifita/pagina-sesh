export default function validateMusic(req, res, next) {
    // Trim the query once so downstream handlers receive normalized input.
    const music = req.query.music?.trim();

    if (!music) {
        return res.status(400).json({
            error: "Informe uma música para pesquisar."
        });
    }

    // Bound the query length before forwarding it to the external API.
    if (music.length > 100) {
        return res.status(400).json({
            error: "A busca deve ter no máximo 100 caracteres."
    });
    }

    req.query.music = music;
    
    next();
}
