import express from "express";

import router from "./routes/fundRouter";
import cors from "cors";
import rateLimit from "express-rate-limit";

const app = express();

app.use(express.json());

app.use(cors());

app.disable("x-powered-by");

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

const port = process.env.PORT || 3000;

app.use(limiter);

app.use("/api/v1/funds", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
