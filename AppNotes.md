* Postgres database docker run:
docker run --name fastfeet_postgres -e POSTGRES_PASSWORD=fastfeet -p 5432:5432 -d postgres

* Criar a migration
yarn sequelize db:migrate

* MD5 Online
nome: fastfeetapp
encriptado: afd58f0038b5c5ccd0bc2109be6ef399
