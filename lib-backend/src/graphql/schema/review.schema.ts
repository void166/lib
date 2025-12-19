export const reviewTypeDef = `#graphql

scalar Date

type Review {
    review_id: ID!
    review_date: String!
    stud_id: ID!
    book_id: ID!
    comment: String!
    rating: Float!
}

input addReview{
    comment: String!
    rating: Float!
    stud_id: String!
    book_id: String!
}

input editReviewInput{
    review_id: String!
    comment: String!
    rating: Float
    stud_id: String!
    book_id: String!
}


type Query {
    reviews: [Review]
    review(id: ID!): Review
}

type Mutation{
    createReview(input: addReview): Review
    editReview(input: editReviewInput): Review
}

`
