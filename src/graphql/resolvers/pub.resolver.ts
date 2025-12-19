import { Publisher } from "../../models/publisher";
import { JWT_COMMON_PAYLOAD } from "../../middleware/auth";
import { PubService } from "../../Services/PubService";


export const resolverPub = {
  Query: {
    publishers: async () => Publisher.findAll(),
    publisher: async (_: any, args: { id: string }) => Publisher.findByPk(args.id),
  },

  Mutation: {
    SignUpPublisher: async (_: any, args: any) => {
      return PubService.createPub(args.input);
    },  

    LoginPublisher: async (_: any, args: any) => {
      return PubService.loginPub(args.input);
    },
  },
};
