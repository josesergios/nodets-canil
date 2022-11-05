import express from 'express';
import dotenv from 'dotenv';
import muistache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';


dotenv.config();

const server = express();

//mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', muistache());

//pasta pÚblica/stÁtica
server.use(express.static(path.join(__dirname, '../public')));

//rotas
server.use(mainRoutes);

server.use((req, res) =>{
    res.render('pages/404');
})

server.listen(process.env.PORT);