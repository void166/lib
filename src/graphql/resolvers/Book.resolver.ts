import { Book } from "../../models/Book";
import { BookService } from "../../Services/BookService";


const {addBook} = BookService;


export const resolverBook = {
  Query: {
    books: async () => Book.findAll(),
    book: async (_: any, args: { id: string }) =>
      Book.findByPk(args.id),
  },
  Mutation: {
    createBook: async (_: any, { input }: any, { pub }: any) => {
      if (!pub) throw new Error("not authenticated");
      return addBook(input, { pub });
  }   
 }
}
