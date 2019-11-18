![img](https://3.bp.blogspot.com/-HDKF6GDcMD8/Xc6QlUbBDzI/AAAAAAAAElo/M3yn9nHMQ8ISeoisPgXeJOnqq9vKf1cNgCK4BGAYYCw/s400/apr.png "information docs")

---

# Проект **Апракос**

Проект создан в [Angular CLI](https://github.com/angular/angular-cli)

    версия 8.3.19

## **Сборка документации Compodoc**

* [смотри здесь](compodoc/index.html)

*Папка /documentation может быть скрыта в проводнике редактора кода. Смотри настройки VSCode*.

Проверте наличие комподока.

Используйте команду `npm run compodoc` или `yarn run compodoc` для сборки документации. Дополнительная информация на сайте [compodoc](http://compodoc.app).
Дополнительные настройки тем *compodoca* и др. - смотреть в файле `package.json`.

---

## **Клонирование проекта и запуск**.

Создайте папки с именем `~/dev/aprakos`.
Клонируйте проект из репозитория **GITHUB**  в данную папку `/aprakos`. Введя в терминале: `git clone https://github.com/Clunya/apr ~/dev/aprakos`

Проверте наличие **node.js** введя в терминале: `node -v`

Поверте наличие и версию Angular CLI введя в терминале: `ng version`

Если версии различаются, тогда возмите из *новейшей* версии `angular` файл `package.json` и после ⚠️ клонирования замените старый `package.json` на новый от устанавливаемой новейшей версии.

Далее установите node-module в `dev/aprakos` введя в терминале: npm install `~/dev/aprakos/apr`

## **Запуск сервера для просмотра разработки проекта**

Запустить сервер `ng s -o` для разработки. Перейдите на `http://localhost:4200` . Сервер настроен на авторелоад.

## **Сборка компонентов**

Генерация нового компонента `ng generate component component-name`. Вы можете дополнительно использовать команды и дерективы `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## **Сборка проекта**

Выполните `ng build` для сборки проекта. Проект будет сохранен в директории `dist/`. Используйте флаг `--prod` для окончательного варианта публикации.

## **Запуск юнит тестов**

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## **Запуск end-to-end тестов**

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Дополнительная информация

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).




---

[маркировка объектов документации](marking.md)
