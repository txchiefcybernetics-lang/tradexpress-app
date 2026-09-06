import time
import traceback
from functools import wraps
from datetime import datetime

from app.services.audit import tradexpress_record_event


def record_execution(func):

    @wraps(func)
    def wrapper(*args, **kwargs):

        start = time.time()

        event = {
            "function": func.__name__,
            "started_at": datetime.utcnow().isoformat(),
            "args_count": len(args),
            "kwargs_keys": list(kwargs.keys())
        }

        try:

            result = func(*args, **kwargs)

            event.update({
                "status": "SUCCESS",
                "execution_time":
                    round(time.time() - start, 4)
            })

            tradexpress_record_event(
                "EXECUTION_SUCCESS",
                event
            )

            return result


        except Exception as e:

            event.update({
                "status": "FAILED",
                "error": str(e),
                "execution_time":
                    round(time.time() - start, 4)
            })

            tradexpress_record_event(
                "EXECUTION_FAILED",
                event
            )

            raise


    return wrapper
