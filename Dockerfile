FROM python:3.8.2

RUN apt update

RUN apt install -y vim

RUN pip install --upgrade pip
RUN pip install requests
RUN pip install js2py
RUN pip install numpy
RUN pip install websocket-client

COPY entrypoint.sh /

RUN chmod 777 ./entrypoint.sh

CMD ["./entrypoint.sh"]
