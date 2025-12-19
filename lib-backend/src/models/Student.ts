import {Optional, DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

export interface StudentAttributes{
    stud_id: string;
    name: string;
    email: string;
    password: string;
}

interface StudentCreationAttributes extends Optional<StudentAttributes, "stud_id">{}

export class Student extends Model <StudentAttributes, StudentCreationAttributes> implements StudentAttributes{
    declare stud_id: string;
    declare name: string;
    declare email: string;
    declare password: string;
}


Student.init({
    stud_id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
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
    tableName: "students",
    timestamps: true
})