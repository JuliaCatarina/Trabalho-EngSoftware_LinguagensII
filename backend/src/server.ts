import { app } from "./app";

const port = process.env.PORT || '3000';


console.log(`listening on: ${port}`);
app.listen(port);
