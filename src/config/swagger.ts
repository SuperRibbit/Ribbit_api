import swaggerUi from 'swagger-ui-express';
import type { Express } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerFile = path.join(__dirname, '../generated/swagger.json');
const swaggerSpec = JSON.parse(fs.readFileSync(swaggerFile, 'utf8'));

export const setupSwagger = (app: Express) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)) ;
};