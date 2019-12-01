![settings](https://1.bp.blogspot.com/-VfbWcrw4Qpc/XdKynSuNRdI/AAAAAAAAErE/ESat0jf6020jPfcX6i__fpJgmsn_ltiRQCLcBGAsYHQ/s320/settings.png)

# Проект **Апракос**

Проект создан в [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19


## **Клонирование проекта и запуск**.

Создайте папки с именем `~/dev/aprakos`.
Клонируйте проект из репозитория **GITHUB**  в данную папку `/aprakos` введя в терминале: 

```bash
git clone https://github.com/Clunya/apr ~/dev/aprakos
```

Проверте наличие **node.js** введя в терминале: 

```bash
node -v
```

Поверте наличие и версию Angular CLI введя в терминале: 

```bash
ng version
```

Если версии различаются, тогда возмите из *новейшей* версии `angular` файл `package.json`, и после ⚠️ клонирования проекта замените старый `package.json` на новый от устанавливаемой новейшей версии, затем приступайте к установке `node-module`.

Этот файл можно скопировать из пробной установки `node-module`.

Для установки `node-module` в `dev/aprakos` введя в терминале: 

```bash
npm install ~/dev/aprakos/apr
```

## **Запуск сервера для просмотра разработки проекта**

Запустить сервер 

```bash
ng s -o
```

 для разработки. Перейдите на `http://localhost:4200` . Сервер настроен на авторелоад.

## **Сборка компонентов**

Генерация нового компонента 

```bash
ng generate component component-name
```
Вы можете дополнительно использовать команды и дерективы 

```bash
ng generate directive|pipe|service|class|guard|interface|enum|module
```

## **Сборка проекта**

Выполните в консоли:

```bash
ng build
```

для сборки проекта. Проект будет сохранен в директории `dist/`. Используйте флаг `--prod` для окончательного варианта публикации.

## **Запуск юнит тестов**

Выполните:

```bash
ng test
```
to execute the unit tests via [Karma](https://karma-runner.github.io).

## **Запуск end-to-end тестов**

Выполните:

```bash
ng e2e
```

to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Дополнительная информация

To get more help on the Angular CLI use 

```bash
ng help
```

or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

---

## **Сборка документации программой `Compodoc`**

*Папка /documentation может быть скрыта в проводнике редактора кода. Смотри настройки VSCode*.

Проверте наличие комподока на вашем компьютере выполнив в терминале:

```bash
compodoc -V
```

Если `compodoc` установлен, тогда используйте команду для сборки документации: 

```bash
npm run compodoc
```

Дополнительная информация на сайте [compodoc](http://compodoc.app).
Дополнительные настройки тем *compodoca* и др. - смотреть в файле `package.json`.

---
[маркировка](маркировка.html)
