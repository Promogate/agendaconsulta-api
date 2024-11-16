import ExpressAdapter from "./infra/http/express-adapter";

const app = new ExpressAdapter();
app.listen(8000);
