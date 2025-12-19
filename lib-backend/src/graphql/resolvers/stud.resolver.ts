import { Student } from "../../models/Student";
import { StudService } from "../../Services/StudService";




export const resolverStud = {
  Query: {
    students: async () => Student.findAll(),
    student: async (_: any, args: { id: string }) =>
      Student.findByPk(args.id),
  },
  Mutation: {
    createStud: async (_: any, args:any) => {
      return StudService.createStud(args.input);
    },
    
    loginStudent: async (_: any, args: any) => {
      return StudService.loginStud(args.input);
    },
    },
  };
