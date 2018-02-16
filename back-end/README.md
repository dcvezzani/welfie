# Welfie


### Set up

#### Install

```
npm install
```

#### Create database

```
./node_modules/.bin/knex-migrate up
```

#### Start server

```
npm start

# or
npm run watch
```


### Endpoints

#### Create user

```
curl -X POST \
  http://localhost:3000/api/users \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: d972b07f-5bae-8621-836b-032b0282a635' \
  -d '{"email": "joe@gmail.com", "given_name": "Joe"}'  
```

#### Index users

```
curl -X GET \
  http://localhost:3000/api/users \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: de430732-523e-a381-1514-5b3bd13b81d5'
```

#### Show user

```
curl -X GET \
  http://localhost:3000/api/users/1 \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: de430732-523e-a381-1514-5b3bd13b81d5'
```


#### Create message

```
curl -X POST \
  http://localhost:3000/api/users/1/messages \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 57a59d7f-56fd-6749-7015-862ebd81e0ef' \
  -d '{"name":"George Smith","email":"rylee@pouros.info","phone":"433-430-0712 x013","sponsoring_entity":"Yost-Wunsch","content":"Impedit itaque fugit dolores officiis deserunt mollitia. Et facilis et pariatur dolores praesentium distinctio soluta. Corporis asperiores ratione tempore non aut esse."}'
```

#### Index messages

```
curl -X GET \
  http://localhost:3000/api/users/1/messages \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: fd017c5f-7aea-6f50-9ec5-2a19eedcd4d8'
```

#### Show message

```
curl -X GET \
  http://localhost:3000/api/users/1/message/1 \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: de430732-523e-a381-1514-5b3bd13b81d5'
```

