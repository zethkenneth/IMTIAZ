const { createLogger, format , transports} = require('winston');
const {combine, printf} = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(
    format.colorize(),
    format.splat(),
    format.simple(),
    format.prettyPrint(),
    myFormat
  ),
  transports: [new transports.Console()],
});

module.exports = logger;