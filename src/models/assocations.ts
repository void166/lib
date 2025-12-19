import { Book } from "./Book";
import { Order } from "./Order";
import { OrderItems } from "./orderItems";
import { Publisher } from "./publisher";
import { Review } from "./review";
import { Student } from "./Student";
import { Transaction } from "./Transaction";

Publisher.hasMany(Book, { foreignKey: "pub_id", as: "books" });
Book.belongsTo(Publisher, { foreignKey: "pub_id", as: "publisherInfo" });

Student.hasMany(Review, { foreignKey: "stud_id", as: "reviews" });
Review.belongsTo(Student, { foreignKey: "stud_id", as: "student" });

Book.hasMany(Review, { foreignKey: "book_id", as: "reviews" });
Review.belongsTo(Book, { foreignKey: "book_id", as: "book" });

Student.hasMany(Transaction, { foreignKey: "stud_id", as: "transactions" });
Transaction.belongsTo(Student, { foreignKey: "stud_id", as: "student" });

Order.hasMany(Transaction, { foreignKey: "order_id", as: "payments" });
Transaction.belongsTo(Order, { foreignKey: "order_id", as: "order" });

Book.hasMany(Transaction, { foreignKey: "book_id", as: "transactions" });
Transaction.belongsTo(Book, { foreignKey: "book_id", as: "book" });

Student.hasMany(Order, { foreignKey: "stud_id", as: "orders" });
Order.belongsTo(Student, { foreignKey: "stud_id", as: "student" });

Order.hasMany(OrderItems, { foreignKey: "order_id", as: "items" });
OrderItems.belongsTo(Order, { foreignKey: "order_id", as: "order" });

Book.hasMany(OrderItems, { foreignKey: "book_id", as: "order_items" });
OrderItems.belongsTo(Book, { foreignKey: "book_id", as: "book" });
