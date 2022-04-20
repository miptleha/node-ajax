![Cat and dog](cat.jpg)

# Node-ajax
Simple AJAX sample on Node.JS  
Does not contain any third-part libraries or packages, only build-in Node.JS modules for server and pure JavaScript with XMLHttpRequest

To run you need to install [Node.JS and NPM](https://nodejs.org/en/download/)  
Then run following code from console:  
```
git clone https://github.com/miptleha/node-ajax.git
cd node-ajax
npm start
```


This commands download sources and run server code from [index.js](index.js).  
Server start listening 8080 port.  
Open your favorite browser and type:
```
http://localhost:8080
```
Browser will contact the server by requesting root. Server will return [main page](index.html).  
Client JavaScript from main page will download [another page](hello.html) and display it (without page refresh) inside main page.  
Possible requests (other will return 404 status): 

| Request | Local file |
| - | - |
| / | index.html |
| /hello | hello.html |
| /cat | cat.jpg |
