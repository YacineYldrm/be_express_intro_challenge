// # Aufgabenstellung

// - Wähle eine Person aus, die du bewunderst und erstelle eine Webseite, auf der Informationen über diese Person zu finden sind. Dies können Autoren, Musiker, ein Celebrity oder jemand, den du persönlich kennst, sein.
// - In dieser Übung verwenden wir Express, um die Webseite zu erstellen. Baue das Routing mit den mitgelieferten Routing-Methoden auf und stelle sicher, dass für jeden Request statischer Inhalt bereitgestellt wird.
// - Deine Webseite sollte mindestens vier Seiten haben:
// - Eine Homepage, die die Besucher willkommen heißt und auf die anderen Seiten verlinkt.
// - Eine "About"-Seite, die eine kurze Biografie der Person enthält.
// - Eine "Work"-Seite, auf der die Werke der Person gezeigt werden, wie zum Beispiel Bücher, Musik oder Kunst.
// - Zuletzt eine "Galerie"-Seite, auf der einige Bilder der Person oder ihrer Arbeiten zu finden sind.

const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

app.use((req, _, next) => {
    console.log("New request: ", req.method, req.url);
    next();
});

app.use(express.static("public"));

app.get("/", (_, res) => {
    res.sendFile(`${__dirname}/public/pages/index.html`);
});

app.get("/api/gallery", (_, res) => {
    res.sendFile(`${__dirname}/gallery.json`);
});

app.get("/api/work", (_, res) => {
    res.sendFile(`${__dirname}/work-list.json`);
});

app.listen(PORT, () => console.log("Server is listening at port: ", PORT));