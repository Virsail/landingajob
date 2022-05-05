import news2 from '../assets/svg/projects/news2.png'
import access from '../assets/svg/projects/accessafya.png'
import inveeen from '../assets/svg/projects/inveeen.jpeg'
import giphy from '../assets/svg/projects/giphy.png'
import pizza from '../assets/svg/projects/pizza.jpeg'
import github from '../assets/svg/projects/github.png'
import pythonshell from '../assets/svg/projects/pythonshell.png'

export const projectsData = [
    {
        id: 1,
        projectName: 'News Application',
        projectDesc: 'This project displays a list of various news sources. On choosing a news source, it will preview the top news articles of the day. Clicking a news article will redirect the user to read it fully from the news source. It achieves this by using the News API.',
        tags: ['Python application'],
        code: 'https://github.com/Virsail/News.git',
        demo: 'https://lokeyfeellike.herokuapp.com/',
        image: news2
    },
    {
        id: 2,
        projectName: 'Access Afya',
        projectDesc: 'An analytics platform built on React js for UI ,Javascript ,Scss for application styling and GraphQl for api data queries.',
        tags: ['React application'],
        code: 'https://github.com/Virsail/AccessAfya.git',
        demo: 'https://accessafyaplatform.netlify.app/',
        image: access
    },
    {
        id: 3,
        projectName: 'Inventory Management System',
        projectDesc: 'This is a inventory management system for tracking inventory levels, orders made, sales and product requests.',
        tags: ['Python application',],
        code: 'https://github.com/Virsail/Inventory-Management-System.git',
        demo: 'https://smartshelf-solns.herokuapp.com/',
        image: inveeen
    },
    {
        id: 4,
        projectName: 'Python Shell',
        projectDesc: 'This is a python based application that manages login and signup credentials of a person for various accounts on a linux terminal i.e. username and passwords for each account.',
        tags: ['Linux shell based project'],
        code: 'https://github.com/Virsail/Python-Shell.git',
        demo: 'https://github.com/Virsail/Python-Shell.git',
        image: pythonshell
    },
    {
        id: 5,
        projectName: 'Github Search',
        projectDesc: 'This is an agular cli powered project that allows the user to input the github user name and get his profile displayed ,It is powered by the github api that allowers the website to access user information from github and display public repositories of the user',
        tags: ['Powered by Angular'],
        code: 'https://github.com/Virsail/Github-Search.git',
        demo: 'https://virsail.github.io/Github-Search/users',
        image: github
    },
    {
        id: 6,
        projectName: 'Giphys For Fun',
        projectDesc: 'This is an Angular app that allows user to search for any giphy ,,see trending giphys and see random giphys just for fun',
        tags: ['Angular'],
        code: 'https://github.com/Virsail/Giphy.git',
        demo: 'https://virsail.github.io/Giphy/',
        image: giphy
    },
    {
        id: 7,
        projectName: 'Pizza Delivery Application',
        projectDesc: 'Slice Of Heaven web app is an application built on JS,HTML and CSS for styling.This is a web app for a pizza shop that definitely gives the client an ultimate experience with our tasty slices.',
        tags: ['Javascript'],
        code: 'https://github.com/Virsail/slice-of-heaven.git',
        demo: 'https://virsail.github.io/slice-of-heaven/',
        image: pizza
    },
  
]
