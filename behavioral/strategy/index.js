const logger = require("./Logger");

logger.log("Hello World");
logger.log("Hi World");
logger.log("Yo World");

logger.changeStrategy("toMorseCode");

logger.log("Hi Erza!");
logger.log("Yolo");
