import { JWT_COMMON_PAYLOAD } from "../../middleware/auth";
import { Order } from "../../models/Order";
import { orderService } from "../../Services/OrderService";

export const resolverOrder = {
  Query: {
    myOrders: async (_: any, __: any, context: { stud?: JWT_COMMON_PAYLOAD }) => {
      const { stud } = context;
    
      if (!stud || !stud.stud_id) {
        throw new Error("Unauthorized");
      }
    
      return Order.findAll({
        where: {
          stud_id: stud.stud_id, 
        },
      });
    },
    

    order: async (_: any, args: { id: string }, ctx: any) => {
      const order = await Order.findByPk(args.id, { include: ["items", "payments"] });
      if (!order) throw new Error("Order олдсонгүй");
      return order;
    },
  },

  Mutation: {
    createOrder: async (
      _: any,
      args: { input: { items: any[] } },
      ctx: { stud?: { stud_id: string } }
    ) => {
      if (!ctx.stud) throw new Error("Unauthorized");
      return  orderService.createOrder(ctx.stud.stud_id, args.input.items);
    },

    cancelOrder: async (_: any, args: { order_id: string }, ctx: {stud?: {stud_id: string}}) => {
      if (!ctx.stud) throw new Error("Unauthorized");
      return orderService.cancelOrder(args.order_id);
    },
  },
};
