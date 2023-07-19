![White Black Bold Minimalist Beauty Blogger Logo](https://github.com/omery33111/omery33111/assets/110463400/ca2a887f-03e2-466f-8d1e-2c923c582f4a)
#

[![Live Netlify Server](https://img.shields.io/badge/Live%20on-Netlify-00ad9f.svg)](https://sparkrise.netlify.app/)

[![Last Commit on GitHub](https://img.shields.io/github/last-commit/omery33111/sparkrise.svg)](https://github.com/omery33111/sparkrise/commits/main)

[![Pull Requests](https://img.shields.io/github/issues-pr/omery33111/sparkrise.svg?labelColor=24292E&logo=github&logoColor=white)](https://github.com/omery33111/sparkrise/pulls)


## Table of Contents
- [Description](#description) 🖐️
- [Technologies](#technologies) 🛠️
- [Features](#features) 📕
  - [Feature List](#feature-list) 📄
  - [Admin Hall](#admin-hall) 🖊️
- [Running Instructions](#running-instructions) 🖱️
  - [Deployments](#deployments) ✈️
  - [Back-end adjustment](#back-end-adjustment) 🖥️
  - [Front-end adjustment](#front-end-adjustment) 🖥️
- [Admin & Staff](#admin--staff) 🤵
- [Contact](#contact) 📞


## Description
SPARKRISE is a place where you emerge empowered and inspired.

SPARKRISE is a community website for individuals who utilize a specific methodology to enhance their productivity and streamline processes. It was created with the aim of optimizing scheduling, coordinating appointments, and facilitating efficient meetings.

SPARKRISE is built on a combination of powerful technologies.

For the back-end, the Django framework API and Simple JWT provide a secure and robust foundation for handling user authentication and managing data. On the front-end, React with Redux and TypeScript enable a dynamic and responsive user interface. We have chosen to utilize SQLite3 as our database option.



## Technologies
* Django: a high-level Python web framework that enables rapid development and clean design.

* Django REST framework: a powerful and flexible toolkit for building Web APIs.

* Simple JWT: a JSON Web Token authentication library for Django that simplifies secure user authentication.

* React: a JavaScript library for building user interfaces, which enables fast and dynamic rendering of components.

* Redux: a state management library that allows for centralized management of application state.

* TypeScript: a superset of JavaScript that adds static types, enabling better code organization and easier debugging.

* SQLite3: a lightweight and self-contained relational database management system that's ideal for smaller-scale projects.



## Features
SPARKRISE provides an exceptional experience.

SPARKRISE offers an exceptional user experience with a variety of features and systems. The website includes a well-designed homepage that presents relevant information and a form for users to provide their details. The team then reviews these details to schedule meetings or calls accordingly. Additionally, the website incorporates a calendar-based appointment system, allowing users to book appointments conveniently.

For staff's convenience and efficient site management, SPARKRISE includes the ability to delete and modify meeting dates. This functionality ensures flexibility and enables smart site administration.



### Feature List

* Homepage & information
* Authentication system
* Appointments system
* Callbacks system
* About



#### Admin hall:
* Watch all user appointments.
* update user appointments.
* delete user appointments.
* Watch all user callbacks.
* update user callbacks.
* delete user callbacks.


## Running Instructions
### Deployments
The front-end of my website is hosted by [Netlify](https://sparkrise.netlify.app/) while the database back-end is hosted on [Render](https://render.com/), allowing for seamless integration and efficient website management.


In order to make the software work properly in your local host, the steps below must be followed:

### Back-end adjustment

| Step | Command | Explanation |
| --- | --- | --- |
| 1 | `https://github.com/omery33111/sparkrise.git` | Clone the project from GitHub |
| 2 | `cd .\sparkrise\Back-end\` | Navigate to the back-end directory |
| 3 | `py -m virtualenv [name your environments file]` | Create virtual environments |
| 4 | `.\[environments name]\Scripts\activate` | Activate the created virtual environment |
| 5 | `pip install -r .\requirements.txt` | Install the project dependencies |
| 6 | `py manage.py migrate` | Apply the database migrations |
| 8 | `py manage.py runserver` | Run the back-end server |


### Front-end adjustment

| Step | Command | Explanation |
| --- | --- | --- |
| 1 | `cd ..` | Go back to the main directory |
| 2 | `npm install` | Install the front-end dependencies |
| 3 | `sparkrise --> Front-end --> src --> endpoints --> endpoints.ts` | Go to the "endpoints.ts" file in the "endpoints" directory. |

To successfully run your server on local host, it's essential to ensure that your endpoints are correctly configured to direct you to the intended destination.

Ensure to designate any external server as marked and remove the marking from the local host server as shown:

![image](https://github.com/omery33111/omery33111/assets/110463400/d2753078-ce03-47ae-b113-9389ca1f91da)



| ...3 |  |  |
| --- | --- | --- |
| 4 | `npm start` | Run the front-end server |

**Now you will be able to access SPARKRISE in your local host** "http://localhost:3000".


## Admin & Staff
In order to be able to access the admin panel of Django, note that you are in Back-end directory and create superuser as written:
  ```
  py manage.py createsuperuser
  ```

### Contact

📧 omery33111@gmail.com

📘 https://www.linkedin.com/in/omer-yanai-01208a262/

🐱 https://github.com/omery33111