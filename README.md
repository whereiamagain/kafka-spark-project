# Apache Kafka and Apache Spark Project

(For detailed project report, please check out [The Project Report](docs/final-report.md).)

## Running the project

You can try out this project running all components in a docker composed cluster, each component will run in a separated container and they will be connected with the default network inside the compose cluster.

Prerequisites:
* Docker
* Port 80 should be available or change the mapping of the `frontend` app in `docker-compose.yml`

Run the project:
* Clone this repository on your computer
* Fire up the docker compose cluster:
    
```    
$ docker-compose up
```    
    
* Open the frontend application in your browser: `$ open http://localhost:80`

## Run the project in developer mode

You can run all components locally. In this way you can easily debug and add new features.

**Prerequisites:**

* Locally installed Node.js ([How to Install Node.js](http://yoember.com/nodejs/the-best-way-to-install-node-js/))
* Locally installed Java 8 and Maven 3.5
* Locally installed Kafka with Zookeeper ([Kafka Quickstart](https://kafka.apache.org/quickstart))
* Locally installed Spark ([Install Spark](http://spark.apache.org/downloads.html))

The `setup` npm script install individual packages and prepare your project. The `start:dev` will run all component's development script concurrently in the same terminal. 

```
$ npm run setup
$ npm start:dev
```

## Documents

* [Final Report](docs/final-report.md)
* [Original project proposal](docs/proposal.md)
* [Notes about finding datasource](docs/finding-datastream-notes.md)

## Component's README files

* [Backend](backend/README.md)
* [API framework, Nest.js original README](backend/FRAMEWORK_README.md)
* [Frontend](frontend/README.md)
* [Frontend framework, React.js original README](frontend/FRAMEWORK_README.md)
* [Kafka](kafka/README.md)
* [SparkStreamer](SparkStreamer/README.md)

## Useful links

* [Awesome Streaming](https://github.com/manuzhang/awesome-streaming)
* [Exactly-once Support in Apache Kafka](https://medium.com/@jaykreps/exactly-once-support-in-apache-kafka-55e1fdd0a35f)
* [Understanding When to use RabbitMQ or Apache Kafka](https://content.pivotal.io/blog/understanding-when-to-use-rabbitmq-or-apache-kafka)
* [Why need Zookeeper for Kafka?](https://www.quora.com/What-is-the-actual-role-of-Zookeeper-in-Kafka-What-benefits-will-I-miss-out-on-if-I-don%E2%80%99t-use-Zookeeper-and-Kafka-together)
