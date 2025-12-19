export const orderItemSchema = `#graphql
type OrderItem {
  id: ID!
  order_id: ID!
  book_id: ID!
  bk_name: String!
  price: Float!
  quantity: Int!
}

extend type Query {
  getOrderItems(order_id: ID!): [OrderItem!]!
}

extend type Mutation {
  createOrderItems(order_id: ID!, items: [OrderItemInput!]!): [OrderItem!]!
  deleteOrderItem(order_id: ID!, book_id: ID!): OrderItem
}

`;
