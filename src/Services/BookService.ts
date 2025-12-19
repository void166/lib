import { Book } from "../models/Book";

export const BookService = {
    async addBook(input:any, context:any){

        console.log('input: ', input);
        console.log("pub: ", context.pub_id);

        if (!context.pub) 
            throw new Error("Unauthorized");

        const { pub_id } = context.pub;   

        const { bk_name, description, author, price, coverImage, fileUrl, pub_date } = input;

        if (
            !bk_name ||
            !description ||
            !author ||
            price === undefined ||
            price === null ||
            !coverImage ||
            !fileUrl
          ) {
            throw new Error("All fields are required");
          }
          

          try{
            const newBook = await Book.create({
                bk_name,
                description,
                author,
                price,
                total_sales: 0,
                pub_id: pub_id,
                pub_date: pub_date ?? new Date(),
                coverImage,
                fileUrl
            });
            console.log("created", newBook);
    
            return newBook;
          }catch(err){
            console.log("aldaa garlaa nom nemhed")
          }
    }
};

