"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("./Book");
const BookStatus_1 = require("./BookStatus");
const Borrowing_1 = require("./Borrowing");
const Report_1 = require("./Report");
const Student_1 = require("./Student");
const Transaction_1 = require("./Transaction");
// 1️⃣ Book ↔ BookStatus (two-way link)
Book_1.Books.hasOne(BookStatus_1.BookStatus, { foreignKey: "book_id" });
BookStatus_1.BookStatus.belongsTo(Book_1.Books, { foreignKey: "book_id" });
// 2️⃣ BookStatus → Books (status_id inside book)
BookStatus_1.BookStatus.hasMany(Book_1.Books, { foreignKey: "stat_ID" });
Book_1.Books.belongsTo(BookStatus_1.BookStatus, { foreignKey: "stat_ID" });
// 3️⃣ Student ↔ Borrowing
Student_1.Student.hasMany(Borrowing_1.Borrowing, { foreignKey: "stud_id" });
Borrowing_1.Borrowing.belongsTo(Student_1.Student, { foreignKey: "stud_id" });
// 4️⃣ Student ↔ Transaction
Student_1.Student.hasMany(Transaction_1.Transaction, { foreignKey: "stud_id" });
Transaction_1.Transaction.belongsTo(Student_1.Student, { foreignKey: "stud_id" });
// 5️⃣ Book ↔ Borrowing
Book_1.Books.hasMany(Borrowing_1.Borrowing, { foreignKey: "book_id" });
Borrowing_1.Borrowing.belongsTo(Book_1.Books, { foreignKey: "book_id" });
// 6️⃣ Borrowing ↔ Transaction
Borrowing_1.Borrowing.hasMany(Transaction_1.Transaction, { foreignKey: "borrowing_id" });
Transaction_1.Transaction.belongsTo(Borrowing_1.Borrowing, { foreignKey: "borrowing_id" });
// 7️⃣ Transaction ↔ Report
Transaction_1.Transaction.hasMany(Report_1.Report, { foreignKey: "trans_id" });
Report_1.Report.belongsTo(Transaction_1.Transaction, { foreignKey: "trans_id" });
