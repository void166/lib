"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const Book_1 = require("../models/Book");
const Student_1 = require("../models/Student");
const Borrowing_1 = require("../models/Borrowing");
const BookStatus_1 = require("../models/BookStatus");
exports.resolvers = {
    Query: {
        books: async () => {
            await Book_1.Books.findAll();
        },
        book: async (_parent, args) => {
            await Book_1.Books.findByPk(args.id);
        },
        students: async () => {
            await Student_1.Student.findAll();
        },
        student: async (_parent, args) => {
            await Student_1.Student.findByPk(args.id);
        },
        borrowings: async () => {
            await Borrowing_1.Borrowing.findAll();
        }
    },
    Mutation: {
        addBook: async (_, args) => {
            const newBook = await Book_1.Books.create({ ...args });
            return newBook;
        }
    },
    Book: {
        status: async (parent) => {
            await BookStatus_1.BookStatus.findByPk(parent.stat_ID);
        }
    }
};
