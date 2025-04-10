import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import path from 'path';

import { router } from './routes'; 
import fileUpload from 'express-fileupload';

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// FileUpload
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024} // No max 50mb
}));

// Rotas
app.use(router);

// Acesso url da imagem ex: http://localhost:3333/files/nome-imagem.png
app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'tmp'))
);

app.use(
  (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.message,
      });
    }

    return res.status(500).json({
      status: 'error',
      message: 'Internal server error.',
    });
  }
);

// Iniciando o servidor
app.listen(process.env.PORT, () => console.log('Servidor online!!!!'));
