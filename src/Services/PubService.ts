import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Publisher } from '../models/publisher';
import { config } from '../config/config';

const {JWT_SECRET_PUB}= config;

export const PubService  = {
    async loginPub(input: any){
        const {email, password} = input;
        if(!email || !password)
            throw new Error("email esvl pass oruul");

        const publisher = await Publisher.findOne({
            where: {email}
        });
        if(!publisher)
            throw new Error(" hereglegch oldsongue");

        const valid = await bcrypt.compare(password, publisher.password);
        if(!valid)
            throw new Error(" pass buruu");

        const token = jwt.sign({
            pub_id: publisher.pub_id,
            email: publisher.email
        },JWT_SECRET_PUB,{
            expiresIn: "10d"
        });

        console.log("user logged in: ", publisher.email)
        console.log("userId: ", publisher.pub_id);
        return {token, publisher}
    },
    async createPub(input: any){
        const {email, name,password}= input;

        console.log("pub Email: ", email);
        console.log("pub password: ", password);
        console.log("pub name: ", name);
        if(!email || !password || !name)
            throw new Error("email esvl pass aa oruulna uu");

        const publisher = await Publisher.findOne({
            where: {email}
        });

        if(publisher)
            throw new Error("hereg;egch burtgeltei bnaa");

        const hashedPassword = await bcrypt.hash(password, 10);

        const newPub = await Publisher.create({
            email, 
            name,
            password: hashedPassword
        });
         
        const token = jwt.sign({
            pub_id: newPub.pub_id,
            email: newPub.email
        },JWT_SECRET_PUB,{
            expiresIn: "10d"
        });
        return {token, publisher: newPub}
    }

}