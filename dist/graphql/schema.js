"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = `#graphql

type Book {
    book_id: ID!
    bk_title: String!
    bk_name: String!
    publisher: String!
    author: String!
    bk_num: Int!
    pub_date: String!
    stat_ID: ID!
}
type Student{
    stud_id: ID!
    fname: String!
    lname: String!
    gender: String!
    age: Int!
    email: String!
    password: String!
}
type Transaction{
    trans_id: ID!
    trans_name: String!
    borrowing_id: ID!
    stud_id: ID!
    trans_date: String!
}
type Borrowing{
    borrowing_id: ID!
    book_id: ID!
    stud_id: ID!
    date_borrowed: String!
    date_return: String!
}
type BookStatus{
    stat_ID: ID!
    book_id!: ID!
    status_name: String!
}
type Report{
    report_id: ID!
    trans_id: ID!
    borrowing_id: ID!
    report_date: String!
}

type Query{
    books: [Book]
    book(id: ID!): Book
    students: [Student]
    student(id: ID!): Student
    borrowings: [Borrowing]
}

type Mutation{
    addBook(
        bk_title: String!
        bk_name: String!
        publisher: String!
        author: String!
        bk_num: Int!
        pub_date: String!
        stat_ID: ID!
    )
}

`;
