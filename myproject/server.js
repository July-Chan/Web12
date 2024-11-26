const express = require('express');
const path = require('path');
const app = express();

// Вказуємо на порт сервера
const PORT = process.env.PORT || 3000;

// Сторінка домашньої сторінки
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Сторінка меню
app.get("/menu", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "menu.html"));
});

// Сторінка про ресторан
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "about.html"));
});

// Сторінка замовлення
app.get("/order", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "order.html"));
});

// Обробка форми замовлення (POST-запит)
app.post("/submit-order", express.urlencoded({ extended: true }), (req, res) => {
    const { name, order } = req.body;
    res.send(`<h2>Дякуємо за замовлення, ${name}!</h2><p Ви замовили: ${order}</p>`);
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер працює на порту ${PORT}`);
});
