# Dockerfile
FROM mysql:latest

COPY ./my.cnf /etc/mysql/my.cnf

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=mydatabase
ENV MYSQL_USER=myuser
ENV MYSQL_PASSWORD=mypassword

EXPOSE 3306
