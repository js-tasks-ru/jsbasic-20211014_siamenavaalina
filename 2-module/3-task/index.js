let calculator = {

sum() {
  return calculator['a'] + calculator['b'];
},
mul() {
  return calculator['a'] * calculator['b'];
},
read(a, b) {
  calculator['a'] = a;
calculator['b'] = b;

}
}

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
