import express, { Request, Response } from "express";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import { User } from "./model";

const app = express();
app.use(cors());
app.use(json({ limit: "1mb" }));
app.use(urlencoded({ limit: "1mb", extended: true }))




app.post("/upload", async (req: Request, res: Response) => {
    try {
        const result = await User.create({ image: req.body.image });
        res.json({ data: result })
    } catch (error) {
        res.json({ data: error })
    }

})

app.get("/image", async (req: Request, res: Response) => {
    try {
        const result = await User.findById("635478dbb61a0c623c9b73f5");
        return res.json({ success: true, message: "Got the image", data: result?.image })
    } catch (error) {
        res.json({ success: true, message: "Couldn't get the image", data: error })
    }

})





app.listen(4000, () => console.log("good"));