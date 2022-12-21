# Сайт-визитка команды Turtle
<hr/>

### Это учебный проект, который был создан в рамках трехмесячного интенсива от академии яндекса по фронтенд рзработке, на основе данного [макета](https://www.figma.com/file/mQUwCKwMvcJVOqo3Ep21OU/%D0%A1%D0%B0%D0%B9%D1%82-%D0%B2%D0%B8%D0%B7%D0%B8%D1%82%D0%BA%D0%B0-%D0%B2%D0%B5%D0%B1-%D1%81%D1%82%D1%83%D0%B4%D0%B8%D0%B8-(%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82-%D0%B4%D0%BB%D1%8F-%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81%D0%B0)?node-id=0%3A1&t=LE1KF4u7OULHTjxM-1)
### Разработка велась с 7.12.2022 до 22.12.2022. В реализации проекта участвовали:
- [Александр Путилин](https://github.com/F0biYA) (ментор)
- [Дарья Старичкова](https://github.com/dstarichkova) (разрботчик/дизайнер - сделала весь дизайн сайта и разработала widget и spinner компоненты)
- [Денисов Николай](https://github.com/Lapxi010) (разработчик/developer - сделал настройку проета, модалку, карту и страницу с коментами)
- [Влад Никулин](https://github.com/Flasck) (разработчик/лидер - сделал полносью heroBlock, слайдер и управлял всеми организацонными моментами)
- [Михаил Теткин](https://github.com/MixelTe) (разработчик/developer - сделал header, footer, projectsPage, сервер, и анимации)

## Технологии и библиотеки, которые использовались на проекте:
<hr/>
React | React-dom | React-redux | React-router-dom | Redux/toolkit | React-hook-form | React-yandex-maps | CSS Modules | Webpack | Babel | Eslint

## Для работы с данным проектом есть следующие команды:
<hr/>

Для запуска проекта в development режиме
```
npm run start
```
Для сборки проекта
```
npm run build
```
Для нахождения ошибок в коде 
```
npm run lint:js
```
Для исправления ошибок в коде
```
npm run lint:js-fix
```
Для запуска сервера
```
npm run startServerDev
```
Для запуска сервера с задержкой
```
npm run startServerDevWithDelay
```
#### Также для запуска полностю проекта с сервером
выполняем по очереди следующие команды
```
cd ./server
npm i
npm run build
cd ..
```
после этого запускаем проект с помошью ранее изложенных команд


## Общая структура проекта
<hr/>

    ├─ public/              
    ├─ server/ 
        ├─ data/  
            ├─ imgs/
            ├─ pages/
            ├─ texts/
        ├─ src/
    ├─ src/
        ├─ components/        
        ├─ pages/        
            ├─ CommentsPage/
            ├─ MainPage/
            ├─ NotFoundPage/
            ├─ PersonalDataPage/
            ├─ ProjectsPage/
            ├─ ServerErrorPage/
        ├─ store/   
        ├─ utils/    
    ├─ webpack.config.js    
    ├─ babel.config.js
    ├─ eslintrc.js



