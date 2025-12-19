export const pubTypeDef = `#graphql

scalar Date
    
type Publisher {
    pub_id: ID!
    name: String!
    email: String!
    password: String!
    books: [Book]
}


type AuthPayloadPublisher {
    token: String!
    publisher: Publisher!
}
input PublisherInput{
    name: String!
    email: String!
    password: String!
}

type Query { 
    publishers: [Publisher]
    publisher(id:ID!): Publisher
}

type Mutation{
    SignUpPublisher(input: PublisherInput
        ): AuthPayloadPublisher

    LoginPublisher(input: PublisherInput
        ): AuthPayloadPublisher
}

`
