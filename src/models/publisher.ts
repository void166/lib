import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db";

export interface PublisherAttributes{
    pub_id: string;
    name: string;
    email: string;
    password: string;
}

interface PublisherCreationAttributes extends Optional<PublisherAttributes, "pub_id">{}


export class Publisher extends Model<PublisherAttributes, PublisherCreationAttributes> implements PublisherAttributes{
    declare pub_id: string;
    declare name: string;
    declare email: string;
    declare password: string;
}

Publisher.init({
    pub_id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    tableName: "publisher",
    timestamps: true
})