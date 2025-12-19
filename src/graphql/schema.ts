import { bookTypeDef } from "./schema/Book.schema";
import { orderSchema } from "./schema/order.schema";
import { orderItemSchema } from "./schema/orderItem.schema";
import { pubTypeDef } from "./schema/publisher.schema";
import { reviewTypeDef } from "./schema/review.schema";
import { studTypeDef } from "./schema/student.schema";
import { transTypeDef } from "./schema/transaction.schema";

export const typeDefs = `#graphql

${bookTypeDef}
${pubTypeDef}
${studTypeDef}
${transTypeDef}
${reviewTypeDef}
${orderItemSchema}
${orderSchema}

`