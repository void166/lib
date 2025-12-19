import { OrderItemService } from "../../Services/OrderItemService";

export const resolverOrderItems = {
    Query: {
      getOrderItems: async (_: any, args: { order_id: string }) => {
        return OrderItemService.getOrderItems(args.order_id);
      },
    },
  
    Mutation: {
      createOrderItems: async (
        _: any,
        args: { order_id: string; items: any[] }
      ) => {
        return OrderItemService.createOrderItems(
          args.order_id,
          args.items
        );
      },
      deleteOrderItem: async(_:any, args: {order_id: string, book_id: string})=>{
        return OrderItemService.deleteOrderItem(args.order_id, args.book_id);
      }
    },
  };
  