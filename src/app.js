import express, { json } from 'express';
import userRoutes from './routes/userRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(json());

app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});