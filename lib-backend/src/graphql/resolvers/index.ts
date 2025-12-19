import { resolverBook } from "./Book.resolver";
import { resolverOrder } from "./order.resolver";
import { resolverOrderItems } from "./orderItems.resolver";
import { resolverPub } from "./pub.resolver";
import { reviewResolver } from "./review.resolver";
import { resolverStud } from "./stud.resolver";

export const resolvers = {
  Query: {
    ...resolverBook.Query,
    ...resolverPub.Query,
    ...resolverStud.Query,
    ...reviewResolver.Query,
    ...resolverOrder.Query,
    ...resolverOrderItems.Query
  },
  Mutation: {
    ...resolverBook.Mutation,
    ...resolverPub.Mutation,
    ...resolverStud.Mutation,
    ...reviewResolver.Mutation,
    ...resolverOrderItems.Mutation,
    ...resolverOrder.Mutation
  },
};
