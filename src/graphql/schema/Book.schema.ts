export const bookTypeDef = `#graphql

scalar Date

type Book {
    book_id: ID!
    bk_name: String!
    description: String!
    author: String!
    price: Float!
    pub_date: Date!
    pub_id: ID!
    total_sales: Int!
    coverImage: String!
    fileUrl: String!
    publisher: Publisher!
    reviews: [Review]
}

input addBook {
    bk_name: String!
    description: String!
    author: String!
    price: Float!
    pub_date: Date
    coverImage: String!
    fileUrl: String!
}


type Query { 
    books: [Book]
    book(id:ID!): Book
}


type Mutation { 
    createBook(input: addBook): Book
}



`
