import app from '../index.js';
import chaiHttp from 'chai-http';
import animeJson from '../anime.json' assert { type: "json" };
import chai, { expect } from 'chai';

chai.use(chaiHttp)

describe('GET /animes',  ()=>{
    it('should respond with 200 status code', async ()=>{
        //const response = await request(app).get('/animes').send()
        const response = await chai.request(app).get('/animes').send()
        expect(response.statusCode).to.equal(200);
        //expect(response.statusCode).toEqual(200);
    })

    it('return a json object', async()=>{
        //const response = await request(app).get('/animes').send()
        const response = await chai.request(app).get('/animes').send()
        expect(response.body).to.deep.equal(animeJson);
        //expect(await response.body).toEqual((await import('../anime.json')).default);
    })

    it('return an anime by id', async()=>{
        const animes  = await chai.request(app).get('/animes').send()
        let anime = Object.keys(animes.body)[0] //obtiene el id del  primer anime de la lista
        const response = await chai.request(app).get(`/animes/${anime}`).send()
        expect(response.body).to.deep.equal(animeJson[1])
    })

    it('return an anime by name', async()=>{
        const response = await chai.request(app).get('/animes/nombre/dragon-ball').send()
        expect(response.body).to.deep.equal(animeJson[2])
    })
})
//al crear se debe de eliminar el creado en el mismo test :

describe('POST /animes', ()=>{
    it('should create a new anime', async ()=>{
        const nuevoAnime = {
            nombre: 'anime nuevo',
            genero: 'Género nuevo',
            año: '2023',
            autor: 'Autor nuevo'
        };

        const response = await chai.request(app).post('/animes').send(nuevoAnime);
        expect(response.statusCode).to.equal(201);
    })

    it('should return the new anime', async () => {
        const response = await chai.request(app).get('/animes/nombre/anime-nuevo').send();
        const newAnime = {
          nombre: 'anime nuevo',
          genero: 'Género nuevo',
          año: '2023',
          autor: 'Autor nuevo'
        };
        expect(response.body).to.deep.equal(newAnime);
    });
})


describe('PUT /animes', ()=>{
    it('should modify an anime', async ()=>{
        const animeActualizado = {
            nombre: 'Nombre Actualizado',
            genero: 'Género Actualizado',
            año: '2023',
            autor: 'Autor Actualizado'
        };

        const lastAnime = await chai.request(app).get('/animes').send()
        const claves = Object.keys(lastAnime.body);
        const ultimaClave = claves.length;

        const response = await chai.request(app).put(`/animes/${ultimaClave}`).send(animeActualizado)
        expect(response.statusCode).to.equal(200);
    })

    it('should show the anime recently modified', async () => {

        const lastAnime = await chai.request(app).get('/animes').send()
        const claves = Object.keys(lastAnime.body);
        const ultimaClave = claves.length;

        const response = await chai.request(app).get(`/animes/${ultimaClave}`).send();
        const updatedAnime = {
          nombre: 'Nombre Actualizado',
          genero: 'Género Actualizado',
          año: '2023',
          autor: 'Autor Actualizado'
        };
        expect(response.body).to.deep.equal(updatedAnime);
    });

})

describe('DELETE /animes', async ()=>{
    it('should delete an anime by id', async ()=>{
        //obtiene el ultimo anime creado 
        const lastAnime = await chai.request(app).get('/animes').send()
        const claves = Object.keys(lastAnime.body);
        const ultimaClave = claves.length;

        const response = await chai.request(app).delete(`/animes/${ultimaClave}`).send()
        expect(response.statusCode).to.equal(200)
    })

    it('should return json object without removed element', async () => {
        
        const animeDeleted = {
            nombre: 'Nombre Actualizado',
            genero: 'Género Actualizado',
            año: '2023',
            autor: 'Autor Actualizado'
        };

        const response = await chai.request(app).get('/animes').send();
        expect(response.body).to.not.have.property(JSON.stringify(animeDeleted));
        
    });
})
