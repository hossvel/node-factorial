# node-factorial
## rest api factorial

curl http://localhost:3000/factorial/5

# levantar el servicio 
node index.js

# levantar el servicio con pm2
crear el archivo ecosystem.config.js : pm2 init 
levantar el servicio
pm2 start ecosystem.config.js

# levantar el proyecto con una imagen de docker pm2
    docker build -t factorialnode .
# run la imagen
    docker run -p 3000:3000 factorialnode
