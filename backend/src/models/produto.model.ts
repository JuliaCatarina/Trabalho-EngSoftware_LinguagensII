import { Model, Optional } from "sequelize";
import { DataTypes } from "sequelize";

import { connection as sequelize } from "../dbconnection";

interface ProdutoAttributes {
  id: number,
  preco: number,
  nome: string,
  descricao: string,
  foto: string,
  quantidade: number,
  vendido: number,
  categoria_id: number,
}

interface ProdutoCreationAttributes extends Optional<ProdutoAttributes, "descricao"> {}

class Produto extends Model<ProdutoAttributes, ProdutoCreationAttributes>
  implements ProdutoAttributes
{
  id!: number;
  preco!: number;
  descricao!: string;
  nome!: string;
  foto!: string;
  quantidade!: number;
  vendido!: number;
  categoria_id!: number;

  readonly createdAt!: Date;
  readonly updatedAt!: Date;
}

Produto.init( 
{
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    },
    preco: {
        type: DataTypes.FLOAT.UNSIGNED,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING(128),
        defaultValue: '',
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING(128),
        defaultValue: '',
    },
    foto: {
        type: DataTypes.STRING(128),
        defaultValue: '',
        allowNull: false,
    },
    quantidade: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: '',
        allowNull: false,
    },
    vendido: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: '',
        allowNull: false,
    },
    categoria_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: '',
        allowNull: false,
    },
}, 
{
  tableName: "produto",
  sequelize,
});

Produto.sync()
  // .then( model => {console.log(model + "sincronizado");})

export { Produto } 