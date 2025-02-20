import express from 'express';
import cors from 'cors';
import { userRouter } from '@/routers';
await import('dotenv/config');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/users', userRouter);

app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `Server is running on port http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`
  );
});
