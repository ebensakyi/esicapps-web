// logger.js
import winston from "winston";
const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
  level: "info",
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.File({
      filename: "./app.log",
      level: "info",
    }),
    new winston.transports.File({
      filename: "./error.log",
      level: "error",
    }),
  ],
});

// Optionally, you can also log to the console in development
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

export { logger };
