import app from './app'
import { createConnection } from "typeorm"

createConnection();

app.listen(3333, () => {
    console.log(`Server running on http://localhost:3333`)
})