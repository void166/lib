import { Order } from "../models/Order";
import { Transaction } from "../models/Transaction"

export const TransactionService = {
    async createTransaction({order_id, amount, provider = "QPAY", invoice_id}: any){
        return Transaction.create({
            order_id,
            amount,
            provider,
            invoice_id,
            status: "INIT"
        });
    },
    async confirmTransaction(invoice_id: string){
        const transaction = await Transaction.findOne({where: {invoice_id}});
        if(!transaction)
            throw new Error("transaction oldsongui");

        if(transaction.status === "SUCCESS") return transaction;


        await transaction.update({status: "SUCCESS"});

        await Order.update(
            {status: "PAID"},
            {where: {order_id: transaction.order_id}}
        );

        return transaction;
    }
}