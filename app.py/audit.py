import os
import json
from datetime import datetime


LOG_FILE = "logs/audit.json"


def tradexpress_record_event(
    event,
    user="system",
    detail=None
):

    os.makedirs(
        "logs",
        exist_ok=True
    )

    record = {
        "timestamp":
            datetime.utcnow().isoformat()+"Z",

        "event":
            event,

        "user":
            user,

        "detail":
            detail
    }


    if os.path.exists(LOG_FILE):

        with open(LOG_FILE,"r") as f:
            data=json.load(f)

    else:
        data=[]


    data.append(record)


    with open(LOG_FILE,"w") as f:
        json.dump(
            data,
            f,
            indent=4
        )


    return record
