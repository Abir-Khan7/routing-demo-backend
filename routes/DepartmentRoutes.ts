import express from "express";

export const router = express.Router();

const departments = [
    {
        id: 1,
        name: "Angular",
        description:
            "Angular is a popular open-source web application framework developed and maintained by Google. It’s built using TypeScript and is designed to make building dynamic, single-page applications (SPAs) more efficient and scalable. Angular provides a complete solution with powerful features like two-way data binding, dependency injection, a modular architecture, and a rich CLI (Command Line Interface) for streamlining development. It’s especially well-suited for building large, complex apps with a strong emphasis on maintainability and performance.",
    },
    {
        id: 2,
        name: "Node",
        description:
            "Node.js is a powerful, open-source runtime environment that allows you to run JavaScript on the server side. Built on Chrome’s V8 JavaScript engine, Node.js is known for its speed and efficiency, particularly in handling I/O-intensive tasks like APIs, real-time applications, and microservices. It uses an event-driven, non-blocking I/O model, making it lightweight and ideal for scalable network applications. With a massive ecosystem of libraries via npm (Node Package Manager), Node.js has become a core technology in modern web development stacks like the MEAN and MERN stacks.",
    },
    {
        id: 3,
        name: "MongoDB",
        description:
            "MongoDB is a popular open-source NoSQL database designed for flexibility, scalability, and high performance. Instead of storing data in traditional tables and rows like relational databases, MongoDB uses a document-oriented model, where data is stored in JSON-like documents (BSON) with dynamic schemas. This makes it ideal for handling unstructured or semi-structured data, evolving data models, and rapid development. It’s commonly used in modern web applications and works especially well with JavaScript-based technologies like Node.js. MongoDB is also built to scale horizontally through sharding and supports rich querying, indexing, and real-time analytics.",
    },
    {
        id: 4,
        name: "Ruby",
        description:
            'Ruby is a dynamic, open-source programming language known for its simplicity and elegant syntax that reads almost like natural English. Created by Yukihiro "Matz" Matsumoto in the mid-1990s, Ruby is designed to make programming more enjoyable and productive for developers. It supports multiple programming paradigms, including object-oriented, functional, and imperative styles.',
    },
];


router.get("/department-list", (req, res) => {
    res.status(200).send(departments)
});
