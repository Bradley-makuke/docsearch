export type MockResult = {
  id: number;
  title: string;
  description: string;
  category: string;
  path: string;
  sourceUrl: string;
  pdfFileName?: string;
  content: string;
};
export const mockSearchResults: MockResult[] = [
  {
    id: 1,
    title: "Understanding Object Oriented Programming",
    description: "Object Oriented Programming is the foundation of instance related programming and it involves encapsulation inheritance and polymorphism.",
    category: "Programming",
    path: "db/001",
    sourceUrl: "https://example.com/undertanding-oop",
    pdfFileName: "understanding-oop.pdf",
    content: "Object Oriented Programming Principles\n\nThis article covers encapsulation, inheritance, polymorphism and abstraction with code examples and diagrams.\n\n(Example content...)"
  },
  {
    id: 2,
    title: "Object Oriented Programming Principles",
    description: "A practical guide to OOP principles with examples and best practices for desining maintanable systems.",
    category: "Programming",
    path: "db/002",
    sourceUrl: "https://example.com/undertanding-oop",
    pdfFileName: "understanding-oop.pdf",
    content: "Object Oriented Programming Principles\n\nThis article covers encapsulation, inheritance, polymorphism and abstraction with code examples and diagrams.\n\n(Example content...)"
  },
  {
    id: 3,
    title: "Applications of Object Oriented Programming",
    description:"Real world applications and case studies showing how OOP helps structure large codebases and systems.",
    category: "Tutorial",
    path: "db/003",
    sourceUrl: "https://example.com/undertanding-oop",
    pdfFileName: "understanding-oop.pdf",
    content: "Object Oriented Programming Principles\n\nThis article covers encapsulation, inheritance, polymorphism and abstraction with code examples and diagrams.\n\n(Example content...)"
  },
  {
    id: 4,
    title: "Design Patterns in OOP",
    description: "Common design patterns and when to use them to solve recurring design problems in onject oriented systems.",
    category: "Articles",
    path: "db/004",
    sourceUrl: "https://example.com/undertanding-oop",
    pdfFileName: "understanding-oop.pdf",
    content: "Object Oriented Programming Principles\n\nThis article covers encapsulation, inheritance, polymorphism and abstraction with code examples and diagrams.\n\n(Example content...)"
  },
  {
    id: 5,
    title: "Intro to Java for Beginners",
    description: "A beginner friendly introduction to Java, covering classes, objects and basic OOP concepts.",
    category: "Tutorial",
    path: "db/005",
    sourceUrl: "https://example.com/undertanding-oop",
    pdfFileName: "understanding-oop.pdf",
    content: "Object Oriented Programming Principles\n\nThis article covers encapsulation, inheritance, polymorphism and abstraction with code examples and diagrams.\n\n(Example content...)"
  },
  {
    id: 6,
    title: "OOP Performance Considerations",
    description: "How to reason about performance in OOP systems and tradeoffs between clarity and runtime cost.",
    category: "Reports",
    path: "db/006",
    sourceUrl: "https://example.com/undertanding-oop",
    pdfFileName: "understanding-oop.pdf",
    content: "Object Oriented Programming Principles\n\nThis article covers encapsulation, inheritance, polymorphism and abstraction with code examples and diagrams.\n\n(Example content...)"
  }
];