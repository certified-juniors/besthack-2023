import { io } from "socket.io-client";

const socket = io("http://localhost:8080");

// Событие подключения
socket.on("connect", () => {
  console.log("Подключено к серверу");

  // Отправка сообщения на сервер
  socket.emit("message", "Привет серверу!");
});

// Событие получения сообщения
socket.on("message", (data) => {
  console.log("Получено сообщение от сервера:", data);
});

// Событие отключения
socket.on("disconnect", () => {
  console.log("Отключено от сервера");
});

// Обработка ошибок
socket.on("error", (error) => {
  console.error("Ошибка соединения:", error);
});
