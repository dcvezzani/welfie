# Welfie

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

#### Create user

```
curl -X POST \
  http://localhost:3000/api/users \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: d972b07f-5bae-8621-836b-032b0282a635' \
  -d '{"email": "joe@gmail.com", "given_name": "Joe"}'  
```

#### List user

```
curl -X GET \
  http://localhost:3000/api/users \
  -H 'Cache-Control: no-cache' \
  -H 'Postman-Token: de430732-523e-a381-1514-5b3bd13b81d5'
```

