import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db";
import { Publisher } from "./publisher";

export interface BookAttributes {
  book_id: string;
  bk_name: string;
  description: string;
  author: string;
  price: number;
  pub_date: Date;
  pub_id: string;
  total_sales: number;
  coverImage: string; 
  fileUrl: string; 
}

interface BookCreationAttributes
  extends Optional<BookAttributes, "book_id" | "pub_date" | "total_sales"> {}

export class Book
  extends Model<BookAttributes, BookCreationAttributes>
  implements BookAttributes
{
  declare book_id: string;
  declare bk_name: string;
  declare description: string;
  declare author: string;
  declare price: number;
  declare pub_id: string;
  declare pub_date: Date;
  declare coverImage: string;
  declare total_sales: number;
  declare fileUrl: string;
}

Book.init(
  {
    book_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    bk_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    total_sales: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    pub_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    coverImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    fileUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pub_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Publisher,
        key: "pub_id",
      },
    },
  },
  {
    sequelize,
    tableName: "books",
    timestamps: true,
  }
);