const helmet = require("helmet");
const app = express();
app.use(helmet.frameguard({ action: "SAMEORIGIN" }));
