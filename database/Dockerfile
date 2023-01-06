FROM mysql:5.7.40

ENV MYSQL_ROOT_PASSWORD=root

COPY ./create_database.sql /docker-entrypoint-initdb.d/

EXPOSE 3306


