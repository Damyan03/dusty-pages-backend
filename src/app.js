import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes.js';
import articleRoutes from './routes/articleRoutes.js';

dotenv.config();

const app = express();

app.use(cors({
	origin: 'http://localhost:5173',
	credentials: true,
}));

app.use(json());

app.use('/api/users', userRoutes);
app.use('/api/articles', articleRoutes);

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});