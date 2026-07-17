import logging
from logging import Logger

from src.config import LOG_FOLDER

LOG_FILE = LOG_FOLDER / "collector.log"


def get_logger() -> Logger:
    LOG_FOLDER.mkdir(parents=True, exist_ok=True)

    logger = logging.getLogger("leadmaps_collector")
    logger.setLevel(logging.INFO)
    logger.propagate = False

    if logger.handlers:
        return logger

    formatter = logging.Formatter(
        fmt="[%(asctime)s] %(levelname)s %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
    )

    file_handler = logging.FileHandler(LOG_FILE, encoding="utf-8")
    file_handler.setLevel(logging.INFO)
    file_handler.setFormatter(formatter)

    logger.addHandler(file_handler)
    return logger
