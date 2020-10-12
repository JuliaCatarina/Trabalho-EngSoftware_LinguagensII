import { Sequelize } from "sequelize";

const mysqlsequelize = new Sequelize(
  {
    host: 'localhost', //variavel de environment quando der deploy no server do back e DB
    database: 'mandelao',
    username: 'root',
    password: 'root', //replace with password for the DB outside any GIT PUSH
    dialect: 'mysql',
    logging: console.log,
    define: {
      freezeTableName: true,
    },
  }
)
// test connection
mysqlsequelize.authenticate().
  then(
    () => {
    console.log('Connection has been established successfully.');
    },
    (reason) => {
    console.log('Failed Connection:\n' + reason);
    }
  );

export { mysqlsequelize as connection }