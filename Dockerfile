FROM bitnami/postgresql:latest
ENV POSTGRESQL_PASSWORD=12345678
ENV POSTGRESQL_USERNAME=admin
ENV POSTGRESQL_DATABASE=university
EXPOSE 5432


#docker build -t image-create-from-dockerfile-postgresql .
#docker run --name dockerfile-postgres -p 35433:5432 -d image-create-from-dockerfile-postgresql

#docker run --name dockerfile-postgres -p 35433:5432 -d -e POSTGRESQL_PASSWORD=12345678 -e POSTGRESQL_USERNAME=admin -e POSTGRESQL_DATABASE=university bitnami/postgresql:latest
