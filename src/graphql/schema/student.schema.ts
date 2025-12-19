export const studTypeDef = `#graphql
scalar Date

type Student {
  stud_id: ID!
  name: String!
  email: String!
  reviews: [Review]
}

input CreateStudInput {
  name: String!
  email: String!
  password: String!
}

input LoginStudInput {
  email: String!
  password: String!
}

type AuthPayloadStudent {
  token: String!
  student: Student!
}

type Query {
  students: [Student]
  student(id: ID!): Student
}

type Mutation {
  createStud(input: CreateStudInput!): AuthPayloadStudent
  loginStudent(input: LoginStudInput!): AuthPayloadStudent
}




`
