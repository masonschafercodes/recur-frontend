# Recurrence

## Prerequisites
- [Node.js](https://nodejs.org/en/)

## Installation
1. Clone the repo
`https://github.com/masonschafercodes/recur-frontend.git`
2. Checkout the development branch
`git checkout dev`
3. create an .env file at the root of the project by copying the `.env.example` from the project and adding your graphql link value
4. Run `yarn` ~ This will install all of the frontend deps that you need to begin working on a feature
5. Run `yarn dev` ~ This will start the server so you can access it at [http://localhost:3000](http://localhost:3000)


## The stack

### Frontend
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [React Hook Forms](https://react-hook-form.com/)

### Backend
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

## Reflection

I have been working on this project for roughly 3 weeks now. I originally started this project to solve a personal issue where I often forget when I have subscriptions due on a monthly basis. Recurrence helps me to see all of current subscriptions in one nicely organized and designed fashion.

One of the main challenges I am currently dealing with is figuring out how I want to integrate a payment system so that I can have a free and pro version of recurrence. This has been a large hurddle because I have never needed to implement this in another project.

At the end of the day, this project is built with React and TailwindCSS on the front end and GraphQL/Apollo Server and MongoDB on the backend. I chose to use the `create-react-app` boilerplate so that I could begin building this project at a quicker pace. If I were to rewrite this I would choose to go with postgres instead of MongoDB so I can have a larger range of backend features to access when it comes to querying the database. I would also go with something like NextJS or Vite on the front end.
