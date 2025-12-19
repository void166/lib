export const transTypeDef = `#graphql

scalar Date

type Transaction {
    trans_id: ID!
    trans_date: String!
    stud_id: ID!
    book_id: ID!
    price: Float!
}

type Query {
    transactions: [Transaction]
    transaction(id: ID!): Transaction
}


type Mutation {
    createTransaction(stud_id: String!, book_id: String!, price: Float!): Transaction
}

`
