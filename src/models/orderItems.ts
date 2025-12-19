import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db";

interface OrderItemAttributes{
    id: string;
    order_id: string;
    book_id: string;
    price: number;
    quantity: number;
    bk_name: string;
} 

interface OrderItemCreationAttributes extends Optional<OrderItemAttributes, "id">{}

export class OrderItems extends Model<OrderItemAttributes, OrderItemCreationAttributes> implements OrderItemAttributes{
    declare id: string;
    declare order_id: string;
    declare book_id: string;
    declare price: number;
    declare quantity: number;
    declare bk_name: string;
}

OrderItems.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    order_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    book_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    bk_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: "order_items",
    timestamps: true
  })
  