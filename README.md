# NodeJS: HTTP Server

Repository ini berisi contoh kode untuk HTTP Server
yang ditulis menggunakan NodeJS.

Sebelum menjalankan apapun pada project ini, silahkan
jalankan basic measurement:

```sh
npm install
```

## HTTP Server

Source code ini dapat dilihat [disini](./http-server).
Jalankan server dengan menggunakan perintah ini di terminal:

```
npm start
```

Lalu bukalah tautan [http://0.0.0.0:8000](http://0.0.0.0:8000)
di dalam browser.

## HTTP Server dengan HTML

Source code ini dapat dilihat [disini](./http-server-html).
Jalankan server dengan menggunakan perintah ini di terminal:

```
npm run serve-html
```

Lalu bukalah tautan [http://0.0.0.0:8000](http://0.0.0.0:8000)
di dalam browser.

## HTTP Server dengan HTML dan Routing

Source code ini dapat dilihat [disini](./http-server-html-with-routing).
Jalankan server dengan menggunakan perintah ini di terminal:

```
npm run serve-html-with-routing
```

Lalu bukalah tautan [http://0.0.0.0:8000](http://0.0.0.0:8000)
di dalam browser.

Dan juga tautan [http://0.0.0.0:8000/about](http://0.0.0.0:8000/about)
untuk halaman about.

## HTTP Server dengan JSON

Source code ini dapat dilihat [disini](./http-server-json).
Jalankan server dengan menggunakan perintah ini di terminal:

```
npm run serve-json
```

Lalu bukalah tautan [http://0.0.0.0:8000](http://0.0.0.0:8000)
di dalam browser.

Atau dengan terminal:

```sh
curl -X GET http://0.0.0.0:8000
```

## HTTP Server dengan JSON request

Source code ini dapat dilihat [disini](./http-server-json-with-request-handler).
Jalankan server dengan menggunakan perintah ini di terminal:

```
npm run serve-json-with-request-handler
```

Lalu jalankan perintah di terminal:

```sh
curl -X POST \
  -H 'Content-Type: application/json' \
  -d '{"username": "sabrina", "password": "123456"}' \
  http://0.0.0.0:8000
```

Maka outputnya akan seperti ini:

```json
{
  "status": "OK",
  "message": "Hello, Sabrina!"
}
```
