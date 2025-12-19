export const orderSchema = `#graphql
type Order {
  order_id: ID!
  stud_id: ID!
  total_amount: Float!
  status: OrderStatus!
  items: [OrderItem!]!
  payments: [Transaction!]!
}

enum OrderStatus {
  PENDING
  PAID
  CANCELLED
}

input OrderItemInput {
  book_id: ID!
  quantity: Int!
  price: Float!
  bk_name: String!
}

input CreateOrderInput {
  items: [OrderItemInput!]!
}

type Query {
  myOrders: [Order!]!
  order(id: ID!): Order
}

type Mutation {
  createOrder(input: CreateOrderInput!): Order!
  cancelOrder(orderId: ID!): Order!
}
`;
