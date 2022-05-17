FROM python:3.8.2

COPY entrypoint.sh /

RUN chmod 777 ./entrypoint.sh

CMD ["./entrypoint.sh"]
