"use strict";

// Задание 1: "Управление библиотекой книг"
// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
  title;
  author;
  pages;

  constructor(title = null, author = null, pages = 0) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  displayInfo() {
    const names = ["Название", "Автор", "Страниц"];
    console.log(
      Object.values(this)
        .map((element, index) => `${names[index]}: ${element}`)
        .join("\n")
    );
  }
}

const book1 = new Book("Война и мир", "Л.Н.Толстой", 50);
const book2 = new Book();
book1.displayInfo();
book2.displayInfo();

// Задание 2: "Управление списком студентов"
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:
// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript

// Пример использования класса
// const student1 = new Student('John Smith', 16, '10th grade');
// student1.displayInfo();
// Вывод:
// Name: John Smith
// Age: 16
// Grade: 10th grade
// const student2 = new Student('Jane Doe', 17, '11th grade');
// student2.displayInfo();
// Вывод:
// Name: Jane Doe
// Age: 17
// Grade: 11th grade

class Student {
  name;
  age;
  grade;

  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  displayInfo() {
    const pupil = Object.entries(this)
      .map(
        (elem) => `${elem[0][0].toUpperCase()}${elem[0].slice(1)}: ${elem[1]}`
      )
      .join("\n");
    console.log(pupil);
  }
}

const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();
const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();
