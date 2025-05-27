# ParentPal – Back-End

This is the back-end server for ParentPal, a parenting app that allows users to log and track their children’s daily activities.

## Tech Stack
- Node.js and Express
- MongoDB and Mongoose
- JWT Authentication
- CORS and Morgan for logging

## API Endpoints

### Auth
- `POST /auth/sign-up`
- `POST /auth/sign-in`

### Children
- `GET /children` – Get all children for a parent
- `POST /children` – Create a new child
- `PUT /children/:childId` – Update a child
- `DELETE /children/:childId` – Delete a child

### Activities
- `GET /activities/:childId` – Get all activities for a child
- `POST /activities` – Create an activity
- `PUT /activities/:id` – Update an activity
- `DELETE /activities/:id` – Delete an activity