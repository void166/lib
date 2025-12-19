import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Student } from "../models/Student"
import { config } from '../config/config';

const {JWT_SECRET_STUD}= config;


export const StudService = {
    async students(){
        return Student.findAll()
    },
    async student(id: string){
        return Student.findByPk(id)
    },
    async createStud(input: any){
        const {email, password, name}= input;
        console.log("email: ", email)
        console.log("password: ", password)
        console.log("name : ", name)

        if(!email || !password || !name)
            throw new Error("email esvl pass aa oruulaach");

        const user = await Student.findOne({
            where: {email}
        });

        if(user)
            throw new Error("hereglegch burtgeltei vbda");

        const hashedPassword =  await bcrypt.hash(password, 10);

        const newStud = await Student.create({
            email,
            name,
            password: hashedPassword
        });

        const token = jwt.sign({
            stud_id: newStud.stud_id,
            email: newStud.email
        },JWT_SECRET_STUD,{
            expiresIn: "1d"
        });

        return {token, student: newStud}
    },
    async loginStud(input: any){
        const {email, password}= input;


        if(!email || !password)
            throw new Error("email esvl pass aa oruulaach");

        const student = await Student.findOne({
            where:{email}
        });

        if(!student)
            throw new Error("hereglegch alga");

        const valid = await bcrypt.compare(password, student.password);

        if(!valid)
            throw new Error("pass buruu bna duu");

        const token = await jwt.sign({
            stud_id: student.stud_id,
            email: student.email
        },JWT_SECRET_STUD,{
            expiresIn: "1d"
        });

        console.log("student logged in: ", student.email);
        console.log("stud_id: ", student.stud_id)

        return {token, student}
    }
}