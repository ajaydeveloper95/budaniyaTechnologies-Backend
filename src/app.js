import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

// for use cors origin
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// for use body data
app.use(
  express.json({
    limit: "16kb",
  })
);

// for use urlencoded with different
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// for use static file serve
app.use(express.static("public"));

// for use secure cookies manuplation
app.use(cookieParser());

export default app;
