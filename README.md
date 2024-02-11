# mern-quizz
Hosted link (I am still working on it,working fine on local host) - https://quizz47.herokuapp.com/
Database -
   User - name 
          email
          password
   Quizz - quizz title : ""
           quizz description : ""
           questions : [
             {question:"test question 1 ?", optiions:[3,5,6,7], answeers:[2,3], difficulty:10},
             {question:"test question 1 ?", optiions:[3,5,6,7], answeers:[2,3], difficulty:10},
             {question:"test question 1 ?", optiions:[3,5,6,7], answeers:[2,3], difficulty:10},
           ]
Postman collection - https://www.getpostman.com/collections/e7e985d851ad12735713
All routes are auth protected with some routes only for admin.

Functions - 
(for user only) register, login, logout, play quizz.
(for admin) register(one time), login, logout , play quizz, view quizz, create quizz.
questions can be of multicoreect type as well as single correct.
quizz starts with mid difficulty level for coreect ans +5 diffculty +1 for -ve ans -2 difficulty -1.
quizz ends.
A graph of no.of attempts vs score will show and result.

backend - render
frontend - netlify

d3js