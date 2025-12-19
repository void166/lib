import { where } from "sequelize";
import { Order } from "../models/Order";
import { OrderItems } from "../models/orderItems";

export const OrderItemService = {
    async createOrderItems(order_id: string, items: any[]){
        const createdItems = [];
        for(const item of items){
            const newItem = await OrderItems.create({
                order_id,
                book_id: item.book_id,
                quantity: item.quantity,
                price: item.price,
                bk_name: item.bk_name
            });

            createdItems.push(newItem);
        }
        return createdItems;
    },
    async deleteOrderItem(order_id: string, book_id: string) {

        const order = await Order.findByPk(order_id);
        if (!order) throw new Error("Order id buruu");
      

        const deleteItem = await OrderItems.findOne({
          where: {
            order_id,
            book_id,
          },
        });
      
        if (!deleteItem) throw new Error("Item alga bn");
      

        await deleteItem.destroy();
        return deleteItem;
      },      

    async getOrderItems(order_id: string){
        return OrderItems.findAll({
            where: {
                order_id
            }
        });
    }
}