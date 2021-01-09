# Interview Assignment (v2.0.1)

This package contains the interview assignment code described at NodeJS_Assessment.pdf
<br>
<br>

## Prerequisites

- NodeJS v12.18.1
- Docker v19.03.13

<br>

## Package Structure

| S/N | Name                  | Type | Description                                                                          |
| --- | --------------------- | ---- | ------------------------------------------------------------------------------------ |
| 1   | javascript            | dir  | This holds the base code which you should extend in order to fulfil the requirements |
| 2   | NodeJS_Assessment.pdf | file | The specification for the assignment                                                 |
| 3   | README.md             | file | This file                                                                            |

<br>

## Exposed Port

| S/N | Application | Exposed Port |
| --- | ----------- | ------------ |
| 1   | database    | 33306        |
| 2   | applicaiton | 3000         |

<br>

## Commands

All the commands listed should be ran in ./javascript directory.

### Installing dependencies

```bash
npm install
```

<br>

### Starting Project

Starting the project in local environment.
This will start all the dependencies services i.e. database.

```bash
npm start
```

<br>

### Running in watch mode

This will start the application in watch mode.

```bash
npm run start:dev
```

### Running in watch mode

This will run test in watch mode.

```bash
npm run test:watch
```

<br>

### Check local application is started

You should be able to call (GET) the following endpoint and get a 200 response

```
http://localhost:3000/api/healthcheck

```

<br>

## Others

### Database

db initialisation is shifted to ./models/index.js, while the config data still in ./src/config/database.js <br>
Database migration scripts are placed in ./database/migrations, use this command to run them:

```bash
sequelize db:migrate
```

run migrations when MySQL docker container is initialised. <br><br>

<br>
<br>
<br>

### Error when starting up

If you encounter the following error when running `npm start`, it is due to the slow startup of your database container.<br>
Please run `npm start` again.

```
[server.js]	ERROR	SequelizeConnectionError: Connection lost: The server closed the connection.
[server.js]	ERROR	Unable to start application
```
