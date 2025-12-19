import sequelize from "../config/db";

import { Order } from "../models/Order";
import { OrderItems } from "../models/orderItems";

export const orderService = {
  async createOrder(stud_id: string, items: any[]) {
    return await sequelize.transaction(async (t) => {



      let totalAmount = 0;
      for (const item of items) {
        totalAmount += item.price * item.quantity;
      }


      const order = await Order.create(
        {
          stud_id,
          total_amount: totalAmount,
          status: "PENDING",
        },
        { transaction: t }
      );

      const createdItems = [];
      for (const item of items) {
        const newItem = await OrderItems.create(
          {
            order_id: order.order_id,
            book_id: item.book_id,
            bk_name: item.bk_name,
            price: item.price,
            quantity: item.quantity,
          },
          { transaction: t }
        );
        createdItems.push(newItem);
      }

      (order as any).items = createdItems;

      return order;
    });
  },

  async cancelOrder(order_id: string) {
    const order = await Order.findByPk(order_id);

    if (!order) throw new Error("Order олдсонгүй");
    if (order.status === "PAID")
      throw new Error("Paid order цуцлах боломжгүй");

    await order.update({ status: "CANCELLED" });
    return order;
  },
};
