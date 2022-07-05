import logging as _logging
import platform as _platform

_logger = None


def _setup_logging(level="INFO"):
    logger = _logging.getLogger()
    handler = _logging.StreamHandler()

    if _platform.system() != 'Windows':
        formatter = _logging.Formatter(
            '[%(asctime)s %(module)s:%(lineno)d][%(levelname)s] %(message)s',
            datefmt='%Y/%m/%d %H:%M:%S')
        handler.setFormatter(formatter)

    handler.setLevel(level)
    logger.setLevel(level)

    logger.addHandler(handler)

    return logger


def get_logger(level="INFO"):
    global _logger

    if _logger is None:
        _logger = _setup_logging(level)

    return _logger
