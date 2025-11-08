import bodyParser, { urlencoded } from "body-parser";
import express from "express";
import type { Request, Response } from "express";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ message: "Admin api is listening!" });
});

app.listen(process.env.PORT, () => {
  console.log(`Admin app is running on port ${process.env.PORT}`);
});
