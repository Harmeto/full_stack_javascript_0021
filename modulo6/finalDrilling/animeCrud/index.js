import express from 'express';
//import animeData from './anime.json' assert { type: "json" };
import { readFileSync, writeFileSync } from 'fs';
import Joi from 'joi';

const animeSchema = Joi.object({
    nombre: Joi.string().required(),
    genero: Joi.string().required(),
    año: Joi.string().required(),
    autor: Joi.string().required()
});

const updateAnimeSchema = Joi.object({
    nombre: Joi.string().optional(),
    genero: Joi.string().optional(),
    año: Joi.string().optional(),
    autor: Joi.string().optional()
});

const PORT = process.env.PORT || 3100;
const animeData = './anime.json';
const app = express();

async function readData() {
    try {
        const data = readFileSync(animeData, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        throw new Error('Error al leer los datos');
    }
}

async function writeData(sendData) {
    try {
        writeFileSync(animeData, sendData, 'utf8');
    } catch (error) {
        throw new Error('Error al escribir los datos');
    }
}

app.get('/animes', async (req, res) => {
    try {
        const data = await readData();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//id tipo numerico 
app.get('/animes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await readData();
        const anime = data[id];
        if (anime) res.status(200).send(anime);
        else res.status(404).json({ message: 'Anime not found' })
    } catch (error) {
        res.status(404).json({ message: 'Anime not found' })
    }
});

//insertar nombre con guion 
app.get('/animes/nombre/:nombre', async (req, res) => {
    let { nombre } = req.params;
    nombre = nombre.toLowerCase().replace('-', ' ');
    const data = await readData();
    const anime = Object.values(data).find(
        (anime) => anime.nombre.toLowerCase() === nombre
    );
    if (anime) {
        res.status(200).json(anime);
    } else {
        res.status(404).json({ error: 'Anime not found' })
    }
});

// Eliminar un anime por su ID
app.delete('/animes/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const data = await readData();

        if (data.hasOwnProperty(id)) {
            const anime = data[id];

            delete data[id];

            const updatedData = JSON.stringify(data, null, 2);

            await writeData(updatedData);

            res.status(200).json({ success: `Anime ${anime.nombre} removed` });
        } else {
            res.status(404).json({ error: 'Anime not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/animes/:id', express.json(), async (req, res) => {
    try {
        const { id } = req.params;
        const updateAnime = req.body;
        const data = await readData();
        if (data.hasOwnProperty(id)) {

            //validate
            const {error, value} = updateAnimeSchema.validate(updateAnime);
            if(error) throw new Error(error.message);

            data[id] = { ...data[id], ...updateAnime };
            const updatedData = JSON.stringify(data, null, 2);
            await writeData(updatedData);
            res.status(200).json({ success: true });
        } else {
            res.status(404).json({ error: 'Anime not found' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Agregar un nuevo anime
app.post('/animes', express.json(), async (req, res) => {
    try {
        const data = await readData();
        const id = Object.keys(data).length + 1;
        const nuevoAnime = req.body;

        //validate 
        const { error } = animeSchema.validate(nuevoAnime);
        if (error) throw new Error(error.details[0].message)

        data[id] = nuevoAnime;
        const updatedData = JSON.stringify(data, null, 2);
        await writeData(updatedData);
        res.status(201).json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


export default app;