import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;
const prismaClient = require('@prisma/client');
app.get('/', async (req: Request, res: Response) => {
    const data = await prismaClient.user.findMany();
    res.json({ data });
});
app.post('/', async (req, res) => {
    await prismaClient.user.create({
        data: {
            username: Math.random().toString(36),
            password: Math.random().toString(36)
        }
    })
    res.json({ message: 'POST request received!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});