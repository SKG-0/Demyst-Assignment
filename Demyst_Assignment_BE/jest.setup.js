import dotenv from "dotenv";
import * as supertest from "supertest";
import { app } from "./src/server";

dotenv.config({ path: ".env.test" });

jest.setTimeout(10000);

global.Request = supertest(app);
