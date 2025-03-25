// 1 - Задача
// Перед увольнением разработчик сломал исходный код управления
// аккаунтами пользователей нашего сервиса доставки еды. Выполни
// рефакторинг методов объекта customer, расставив отсутствующие this при
// обращении к свойствам объекта.
// Используй этот стартовый код и выполни рефакторинг. После объявления
// объекта мы добавили вызовы методов. В консоль будут выведены
// результаты их работы. Пожалуйста, ничего там не меняй.

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"

// 2 - Задача
// Создай класс Storage, который будет создавать объекты для управления
// складом товаров. Класс ожидает только один аргумент — начальный массив
// товаров, который записывается в созданный объект в приватное свойство
// items.
// Объяви следующие методы класса:
// ● getItems() — возвращает массив текущих товаров в приватном
// свойстве items.
// ● addItem(newItem) — принимает новый товар newItem и добавляет его в
// массив товаров в приватное свойство items объекта.
// ● removeItem(itemToRemove) — принимает строку с названием товара
// itemToRemove и удаляет его из массива товаров в приватном свойстве
// items объекта.
// Возьми код ниже с инициализацией экземпляра и вызовами методов и вставь
// его после объявления класса для проверки корректности работы. В консоль
// будут выведены результаты их работы. Пожалуйста, ничего там не меняй.

class Storage {}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids","Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids","Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids","Antigravitator", "Droid"]
storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids","Antigravitator", "Droid"]
