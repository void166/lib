import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db";

interface OrderAttributes {
  order_id: string;
  stud_id: string;
  total_amount: number;
  status: "PENDING" | "PAID" | "REFUNDED" | "CANCELLED";
}

interface OrderCreationAttributes
  extends Optional<OrderAttributes, "order_id"> {}

export class Order
  extends Model<OrderAttributes, OrderCreationAttributes>
  implements OrderAttributes
{
  declare order_id: string;
  declare stud_id: string;
  declare total_amount: number;
  declare status: "PENDING" | "PAID" | "REFUNDED" | "CANCELLED";
}

Order.init(
  {
    order_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    stud_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    total_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("PENDING", "PAID", "REFUNDED", "CANCELLED"),
      allowNull: false,
      defaultValue: "PENDING",
    },
  },
  {
    sequelize,
    timestamps: true,
    tableName: "orders",
  }
);
