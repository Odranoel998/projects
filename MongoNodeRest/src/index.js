import app from "./app.js";
import { connectMongoose } from "./database/db.js";

connectMongoose();
app.listen(3000);

console.log("Servidor PORT", 3000);
