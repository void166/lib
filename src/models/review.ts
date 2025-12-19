import{ DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db";
import { Student } from "./Student";
import { Book } from "./Book";

export interface ReviewAttributes {
  review_id: string;
  review_date: Date;
  stud_id: string;
  book_id: string;
  comment: string;
  rating: number;
}

interface ReviewCreationAttributes
  extends Optional<ReviewAttributes, "review_id" | "review_date"> {}

export class Review
  extends Model<ReviewAttributes, ReviewCreationAttributes>
  implements ReviewAttributes
{
  declare review_id: string;
  declare review_date: Date;
  declare stud_id: string;
  declare book_id: string;
  declare comment: string;
  declare rating: number;
}

Review.init(
  {
    review_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    review_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    stud_id: {
      allowNull: false,
      type: DataTypes.UUID,
    },
    book_id: {
      allowNull: false,
      type: DataTypes.UUID,
    },
  },
  {
    sequelize,
    tableName: "reviews",
    timestamps: true,
  }
);
