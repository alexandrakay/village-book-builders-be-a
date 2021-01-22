# API Basics

> Please note due to json-server, ALL HTTP verbs are supported at this time. Refer to https://www.notion.so/VBB-Designing-API-Contract-Endpoints-eca9722b1fdb4552915f9f0999ba802a for API specifications/contracts
---
##Base URL
https://vbb-mock-api.herokuapp.com/

## Routes
  "/api/*": "/$1",
  "/admin/library": "/library",
  "/admin/library/:id": "/library/:id",
  "/headmaster/village": "/village",
  "/headmaster/village/:id": "/village/:id",
  "/headmaster/schools": "/schools",
  "/headmaster/schools/:id": "/schools/:id",
  "/headmaster/mentee/:id": "/students/:id",
  "/headmaster/mentee/": "/students",
  "/headmaster/mentor/": "/mentors",
  "/teacher" : "/teacher",
  "/program" : "/program"
  
  
 
