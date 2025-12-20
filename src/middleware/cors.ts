import cors, { CorsOptions } from "cors";

const corsOptions: CorsOptions = {
  origin: [process.env.FRONTEND_URL || "http://localhost:3000/"],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  credentials: true,
};

export const corsMiddleware = cors(corsOptions);
