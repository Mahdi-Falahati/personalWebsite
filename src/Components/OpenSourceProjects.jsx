import Card from "./Card/Card";

import budge from "../Assets/Projects/budge.jpg";
import classRom from "../Assets/Projects/classRom.jpg";
import nextjsTodolist from "../Assets/Projects/nextjsTodoList.jpg";
import rcDom from "../Assets/Projects/rcDom.jpg";
import restCountries from "../Assets/Projects/restCountries.jpg";
import todoList from "../Assets/Projects/todoList.jpg";
import tvDom from "../Assets/Projects/tvDom.jpg";
import useHttp from "../Assets/Projects/useHttp.jpg";

export default function OpenSourceProjects() {
  return (
    <section className="my-8">
      <h2
        className="text-2xl py-2 font-bold text-center"
        id="OpenSourceProjects"
      >
        - OpenSource Projects -
      </h2>
      <section className="mx-1 flex justify-around flex-wrap items-center">
        {Cards?.map((item, id) => (
          <Card
            key={id}
            img={item.img}
            link={item.link}
            title={item.title}
            tecnologhy={item.tecnologhy}
            description={item.description}
          />
        ))}
      </section>
    </section>
  );
}

const Cards = [
  {
    title: "Class Room",
    description:
      "A classRoom ecosystem full stack JS ( MERN => Mogodb / ExpressJS / ReactJS / NodeJS) app and a group project with my friend",
    img: { src: classRom, alt: "classrom" },
    link: { code: "https://github.com/Mahdi-Falahati/class-room-project-3" },
    tecnologhy: [
      "React",
      "Mui",
      "Redux",
      "Redux-Toolkit",
      "Axios",
      "React-Router-Dom",
      "NodeJS",
      "ExpressJS",
      "Mongoose",
      "NodeMoon",
    ],
  },
  {
    title: "NextJS TodoList",
    description:
      "A Todo List application using next js & The todo items were stored using Redux & For the user interface, the Material-UI (Mui) framework was incorporated and have dark mode  etc...",
    img: { src: nextjsTodolist, alt: "nextJs todolist" },
    link: {
      live: "https://todo-list-nextjs-two.vercel.app/",
      code: "https://github.com/Mahdi-Falahati/todo-list-nextjs",
    },
    tecnologhy: ["NextJS", "Mui", "Redux", "Redux-Toolkit", "uuid", "dayjs"],
  },
  {
    title: "RC Shop",
    description: "A template for Shopping",
    img: { src: rcDom, alt: "RC shop Dom Project" },
    link: {
      live: "https://rc-shop.netlify.app/",
      code: "https://github.com/Mahdi-Falahati/rc-dom-project",
    },
    tecnologhy: ["HTML5", "CSS3", "Bootstrap", "JS"],
  },
  {
    title: "Rest Countries",
    description:
      "Get data from api with axios and this web application using React and styled component with React Bootstrap with dark mode & live search with filter",
    img: { src: restCountries, alt: "Rest Coutntries" },
    link: {
      live: "https://restcountries-mahdifalahati.vercel.app/",
      code: "https://github.com/Mahdi-Falahati/rest-countries-dom-project",
    },
    tecnologhy: [
      "HTML5",
      "CSS3",
      "React-Bootstrap",
      "ReactJS",
      "Axios",
      "Ajax",
    ],
  },

  {
    title: "useHttps",
    description: "use-https is a react-js custom component for Request https",
    img: { src: useHttp, alt: "custom hoock for https" },
    link: { code: "https://github.com/Mahdi-Falahati/use-https" },
    tecnologhy: ["ReactJS"],
  },
  {
    title: "TV Show",
    description:
      "Get data from tvMaze api and show to page with live search and order by select sesion",
    img: { src: tvDom, alt: "tv Dom Project" },
    link: {
      live: "https://aps-mahdi-falahati-tv.netlify.app/",
      code: "https://github.com/Mahdi-Falahati/tv-show-dom-project",
    },
    tecnologhy: ["HTML5", "CSS3", "JS", "Ajax"],
  },
  {
    title: "Todo List",
    description:
      "You can write your todo and save your todo in local storage and data don't remove by refresh",
    img: { src: todoList, alt: "todo list" },
    link: {
      live: "https://todo-list-seven-lac.vercel.app/",
      code: "https://github.com/Mahdi-Falahati/TodoList",
    },
    tecnologhy: ["HTML5", "CSS3", "JS"],
  },

  {
    title: "Budget Weekly",
    description:
      "you can Expenditure and Income Audit width this page. this page is responsive so don't worry you can use this page in all monitor resolution . in this proj save data in localstorage so if close your borwser don't Destroyed your informations",
    img: { src: budge, alt: "budjet-weekly" },
    link: {
      code: "https://github.com/Mahdi-Falahati/Audit-of-income-and-expenses",
    },
    tecnologhy: ["HTML5", "CSS3", "Bootstrap"],
  },
];
