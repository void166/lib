import { error } from "console";
import { JWT_COMMON_PAYLOAD } from "../../middleware/auth";
import { Review } from "../../models/review";

export const reviewResolver = {

  Query: {
    reviews: async () => Review.findAll(),
    review: async (_: any, args: { id: string }) =>
      Review.findByPk(args.id),
  },

  Mutation: {
    createReview: async (
      _: any,
      args: { input:any},
      context: { stud?: JWT_COMMON_PAYLOAD }
    ) => {
      const { comment, rating, book_id } = args.input;
      const { stud } = context;

      console.log("input: ",args.input);
      console.log("stud_id: ", context.stud)

      if (!stud)
        throw new Error("unauthorized");

      try{

      const newReview = await Review.create({
        comment,
        rating,
        book_id,
        stud_id: stud.stud_id!
      });

      return newReview;
      }catch(err){
        console.error("review aldaa zaasaan: ", err);
      }
    },
    editReview: async (
      _: any,
      args: { input: any },
      context: { stud?: JWT_COMMON_PAYLOAD }
    ) => {
      const { comment, rating, review_id } = args.input;
      const { stud } = context;
    
      if (!stud)
        throw new Error("Unauthorized user");
    
      const review = await Review.findByPk(review_id);
    
      if (!review)
        throw new Error("Review олдсонгүй");
    
      if (review.stud_id !== stud.stud_id)
        throw new Error("review owner buruuenoo");
    
      try {
        await review.update({
          comment,
          rating,
        });
    
        return review;
      } catch (err) {
        console.error("Review update error:", err);
        throw new Error("Review засахад алдаа гарлаа");
      }
    }
    
  },
};
