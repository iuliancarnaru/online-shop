# E-commerce app with Redux, Hooks, GraphQL, ContextAPI, Stripe, Firebase

## This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

### DOCKER COMMANDS

docker run - run a container from an image / -d : detach > -i : interactive > -it : interctive terminal

```docker run nginx (if the image is no present on docker it will be downloaded)
docker run -d nginx (run in the background and retun to console)
docker attach a043d (attach console back to container)
docker run -i webapp
docker run -it webapp
```

run a container with the nginx:1.14-alpine image and name it webapp

`docker run --name webapp nginx:1.14-alpine`

docker ps - list all running containers

```docker ps (id, image, command, created, status, ports, names)
docker ps -a (list all container up and down)
```

docker stop (id / name) - stop the container

```docker stop 796856ac413d
docker stop silly_sammet
```

docker rm (id / name) - remove a container

```docker rm 796856ac413d
docker rm silly_sammet
```

docker images - list all images present on our host and their sizes

`docker images`

docker rmi (name) - remove an image (previously stoped)

`docker rmi nginx`

docker pull (name) - download the image but it doesn't run the container

`docker pull nginx`

docker port mapping

`docker run webapp (IP CONTAINER: 172.17.0.2:5000 ~ IP HOST: 192.168.1.5:80)`
`docker run -p 80:5000 webapp`

docker volume mapping

```docker run mysql
docker stop mysql
docker rm mysql (data inside the database are forever lost)
```

OR we can map to a data directory

`docker run -v /opt/datadir:/var/lib/mysql mysql`

docker inspect for more details about container

`docker inspect (name)`
