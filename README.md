# Node-factorial
## Rest api factorial

curl http://localhost:3000/factorial/5

# Levantar el servicio 
node index.js

# Levantar el servicio con pm2

## Crear el archivo ecosystem.config.js 
 pm2 init 
## Levantar el servicio
pm2 start ecosystem.config.js

# Levantar el proyecto con una imagen de docker pm2
    docker build -t factorialnode .
# run la imagen
    docker run -p 3000:3000 -d factorialnode

# Generar imagen docker sin pm2
    docker build -t dockerfactorialnode .
# RUN imagen generada 
docker run -p 3000:3000 -d dockerfactorialnode
# RUN Test
npm test
