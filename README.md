# Сайт-визитка команды Turtle

### Это учебный проект, который был создан в рамках интенсива от академии яндекса по фронтенд разработке, на основе данного [макета](https://www.figma.com/file/mQUwCKwMvcJVOqo3Ep21OU/%D0%A1%D0%B0%D0%B9%D1%82-%D0%B2%D0%B8%D0%B7%D0%B8%D1%82%D0%BA%D0%B0-%D0%B2%D0%B5%D0%B1-%D1%81%D1%82%D1%83%D0%B4%D0%B8%D0%B8-(%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82-%D0%B4%D0%BB%D1%8F-%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81%D0%B0)?node-id=0%3A1&t=LE1KF4u7OULHTjxM-1)
### Командная работа над проектом заняла две недели. Роли были распределены следующим образом:
- [Влад Никулин](https://github.com/Flasck) (Лидер команды, помимо организации рабочего процесса сделал полностью heroBlock, слайдер)
- [Дарья Старичкова](https://github.com/dstarichkova) (Сделала весь дизайн сайта и разработала widget и spinner компоненты)
- [Денисов Николай](https://github.com/Lapxi010) (Сделал настройку проекта, модалку, карту и страницу с комментами)
- [Михаил Теткин](https://github.com/MixelTe) (Сделал header, footer, projectsPage, сервер, и анимации)
- [Александр Путилин](https://github.com/F0biYA) (Ментор, проводил ревью кода и помогал двигаться в нужном направление)
<hr/>

## :hammer_and_wrench: Технологии и библиотеки, которые использовались на проекте:
<div  align=center>
    <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="70" height="70"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="70" height="70"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="70" height="70"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" title="React" alt="React" width="70" height="70"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original-wordmark.svg" title="NodeJS" alt="NodeJS" width="70" height="70"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" title="Typescript" alt="Typescript" width="70" height="70"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/webpack/webpack-original.svg" alt="Webpack" title="Webpack" width="70px" height="70px">&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/babel/babel-original.svg" alt="Babel" title="Babel" width="70px" height="70px">&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/figma/figma-original.svg" title="Figma" alt="Figma" width="70" height="70"/>&nbsp;
</div>

## Инструкция для запуска проекта локально
Сначала склонируйте себе проект на компьютер
```
git clone https://github.com/Flasck/Own_project.git
```
Далее в корне проекта устанавливаем все зависимости, следующей командой
```
npm i
```
Потом переходим в папку server
```
cd ./server
```
И устанавливаем тут все зависимости для сервера
```
npm i
```
Теперь для сборки сервера выполняем следующую команду
```
npm run build
```
И запускам его
```
npm run startDEV
```
Потом переходим в корень проекта и там тоже запускем проект
```
npm run start
```
## Общая структура проекта

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


## [Док по серверу](./server/README.md)

