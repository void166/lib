import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db";

export interface TransactionAttributes {
  trans_id: string;
  order_id: string;
  provider: "QPAY";
  amount: number;
  status: "INIT" | "SUCCESS" | "FAILED";
  invoice_id: string;
}

interface TransactionCreationAttributes
  extends Optional<TransactionAttributes, "trans_id"> {}

export class Transaction
  extends Model<TransactionAttributes, TransactionCreationAttributes>
  implements TransactionAttributes
{
  declare trans_id: string;
  declare order_id: string;
  declare provider: "QPAY";
  declare amount: number;
  declare status: "INIT" | "SUCCESS" | "FAILED";
  declare invoice_id: string;
}

Transaction.init(
  {
    trans_id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    order_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    provider: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "QPAY"
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("INIT", "SUCCESS", "FAILED"),
      defaultValue: "INIT"
    },
    invoice_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  },
  {
    sequelize,
    tableName: "transactions",
    timestamps: true,
  }
);
