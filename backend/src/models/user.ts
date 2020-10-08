import { Model, Optional } from "sequelize";
import { DataTypes } from "sequelize";

import { connection as sequelize } from "../dbconnection";

interface UserAttributes {
  id: number,
  email: string,
  nome: string,
  senha: string,
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

class User extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  id!: number;
  email!: string;
  nome!: string;
  senha!: string;

  readonly createdAt!: Date;
  readonly updatedAt!: Date;
}

User.init( 
{
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING(128),
    unique: true,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING(128),
    defaultValue: '',
  },
  senha: {
    type: DataTypes.STRING(128),
    allowNull: false,
  }
}, 
{
  tableName: "user",
  sequelize,
});

User.sync()
  // .then( model => {console.log(model + "sincronizado");})

export { User } 