# E-commerce app with Redux, Hooks, GraphQL, ContextAPI, Stripe, Firebase

## This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

### DOCKER COMMANDS

## docker run - run a container from an image / -d : detach > -i : interactive > -it : interctive terminal

```docker
docker run nginx (if the image is no present on docker it will be downloaded)
docker run -d nginx (run in the background and retun to console)
docker attach a043d (attach console back to container)
docker run -i webapp
docker run -it webapp
```

## run a container with the nginx:1.14-alpine image and name it webapp

```docker
docker run --name webapp nginx:1.14-alpine
```

## docker ps - list all running containers

```docker
docker ps (id, image, command, created, status, ports, names)
docker ps -a (list all container up and down)
```

## docker stop (id / name) - stop the container

```docker
docker stop 796856ac413d
docker stop silly_sammet
```

## docker rm (id / name) - remove a container

```docker
docker rm 796856ac413d
docker rm silly_sammet
```

## docker images - list all images present on our host and their sizes

```docker
docker images
```

## docker rmi (name) - remove an image (previously stoped)

```docker
docker rmi nginx
```

## docker pull (name) - download the image but it doesn't run the container

```docker
docker pull nginx
```

## docker port mapping

```docker
docker run webapp (IP CONTAINER: 172.17.0.2:5000 ~ IP HOST: 192.168.1.5:80)
docker run -p (host)80:(container)5000 webapp
docker run -p 80:5000 webapp:blue (tag blue)
```

## docker volume mapping

```docker
docker run mysql
docker stop mysql
docker rm mysql (data inside the database are forever lost)
```

## OR we can map to a data directory

```docker
docker run -v /opt/datadir:/var/lib/mysql mysql
```

## docker inspect for more details about container

```docker
docker inspect (name)
```

## docker logs

```docker
docker logs (name)
```

## docker ENV variables (-e: environment variable) / inspect in -> config: env: "APP_COLOR=blue"

```docker
docker run -e APP_COLOR=blue webapp
docker inspect webapp
docker run -d -e MYSQL_ROOT_PASSWORD=db_pass123 --name mysql-db mysql
```

## DOCKERFILE (layered architecture), find details by running docker history (name)

```docker
FROM Ubuntu                                               --> base OS
RUN apt-get update                                        --> install all dependencies
RUN apt-get install python

RUN pip install flask
RUN pip install flask-mysql

COPY . /opt/source-code                                   --> copy source code

ENTRYPOINT FLASK_APP=/opt/source-code/app.py flask run    --> specify entry point
```

```docker
docker build Dockerfile -t webapp .

```

## Find an operating system used by an image

```docker
docker run python:3.6 cat /etc/*release*
```
