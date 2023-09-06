import { useState, useEffect } from "react";

//определяю функцию getStorageValue, чтобы достать значения из localStorage
//key - ключ, по которому должны достать значения и defaultValue - если не будет значение по key, функция вернет дефолтные значения
function getStorageValue(key, defaultValue) {
  // обращаемся к localStorage по указанному ключу и получаем значение
  const saved = localStorage.getItem(key);
  //далее это значение парсим из JSON-строки
  const initial = JSON.parse(saved);
  //если значение было получаено- возвращаем или возвращаем дефолтное значение
  return initial || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
  //в useState передаем стратовое значение состояния - функция getStorageValue
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  //сработает при старте компонента и при изменении свойств key или value
  useEffect(() => {
    //записывает в localStorage по нужному ключу нужное значение
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  //возвращаем состояние и изменение состояния
  return [value, setValue];
};
