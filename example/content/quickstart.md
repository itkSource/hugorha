---
title: "Quickstart"
menu: 
    main:
        weight: 2
---

# Quickstart

This page describe how to run lorhammer from simple usage to more complex use cases.

# Simple launch

To start only one lorhammer with 10 gateways and 5 nodes by gateway :

```shell
lorhammer -nb-gateway 10 -min-nb-node 5 -max-nb-node 5 -ns-address 127.0.0.1:1700
```

Lorhammer will start to stress the network server at `127.0.0.1:1700`. Except some logs you will not see what happens on your system. Follow next step to have more details.

# Launch tools

Git clone the project (you don't need to have go installed to launch tools).

To start tools you need to have [docker](https://docs.docker.com/engine/installation/) and [docker-compose](https://docs.docker.com/compose/install/).

## Environment variables

Add this variables to your environment variables :

* **LORHAMMER_CONSUL_IP** : the ip address used to contact consul
* **LORHAMMER_PROMETHEUS_IP** : the ip address used to run prometheus
* **LORHAMMER_MQTT_IP** : the ip address used to run mqtt used for cross tool communication
* **LORHAMMER_GRAFANA_IP** : the ip address used to access grafana

Most of time, this variables can be `127.0.0.1`.

Alternatively you can override port variables (in case of double usage/installation, this ports must be free in host) :

* **LORHAMMER_MQTT_PORT** : the port address used to contact mqtt, default is 1883
* **LORHAMMER_PROMETHEUS_PORT** : the port used to contact prometheus, default is 9090
* **LORHAMMER_CONSUL_PORT** : the port used to contact consul, default is 8500
* **LORHAMMER_GRAFANA_PORT** : the port used to contact grafana, default is 3000

## Command

Start :

```shell
resources/scripts/launchTools.sh
```

Will launch :

* [Prometheus](https://prometheus.io/) to manage metrics ([web application](http://127.0.0.1:9090/))
* [Grafana](https://grafana.com/) to chart metrics from prometheus ([web application](http://127.0.0.1:3000/))
* [Consul](https://www.consul.io/) to discover lorhammer services
* [Mosquitto](https://mosquitto.org/) mqtt-broker to communicate between orchestrator and lorhammer

After all tools are launched, open a web browser on [127.0.0.1:3000](127.0.0.1:3000). By default login is `admin` and password is `pass`. 
Add a data source with name `prometheus`, type `Prometheus`, url `lorhammer_prometheus_1:9090` let other params by default.
Load default dashboard, you can find it in `resources/grafana/DashboardLora.json`.

Go on the `Lora` dashboard, if all is ok and you start a lorhammer 

```shell
lorhammer -nb-gateway 10 -min-nb-node 5 -max-nb-node 5 -ns-address 127.0.0.1:1700 -consul 127.0.0.1:8500
```

And you will see :

[![simple launch illustration](/images/quickstart/simpleLaunch.png)](/images/quickstart/simpleLaunch.png)

# Launch orchestrator

An orchestrator manage a plenty of lorhammers.

Start some lorhammers :

```shell
lorhammer -consul 127.0.0.1:8500
lorhammer -consul 127.0.0.1:8500
lorhammer -consul 127.0.0.1:8500
```

And then launch an orchestrator with a simple scenario :

```shell
orchestrator -consul 127.0.0.1:8500 -from-file "./resources/scenarios/simple.json"
```

This scenario will launch a ramp from 0 gateway to 10 gateways in 5 minutes. Each gateways will have 50 nodes. After 10 minutes `orchestrator` will check some numbers in prometheus and exit 1 if some check fails.

Don't forget to open grafana dashboard to see what happens.

# First scenario

A scenario is an array of tests. A test is the description needed by the orchestrator (and the lorhammers) to stress a network server. All parameters are :

```json
[{
  "testType": "oneShot | repeat | ramp",
  "rampTime": "5m",
  "repeatTime": "0",
  "stopAllLorhammerTime": "0",
  "shutdownAllLorhammerTime": "10m",
  "init": {
    "nsAddress": "127.0.0.1:1700",
    "nbGateway": 10,
    "nbNodePerGateway": [50, 50],
    "scenarioSleepTime": ["10s", "10s"],
    "gatewaySleepTime": ["100ms", "500ms"]
  },
  "provisioning": {
    "type": "none",
    "config": {
      "apiUrl": "127.0.0.1:9999"
    },
    "config": {
      "nsAddress": "127.0.0.1:1701",
      "asAddress": "127.0.0.1:4000",
      "csAddress": "127.0.0.1:5000",
      "ncAddress": "127.0.0.1:6000"
    }
  },
  "prometheusCheck": [
    {"query": "sum(lorhammer_gateway)", "resultMin": 10, "resultMax": 10, "description": "nb gateways"}
  ],
  "deploy": {
    "type": "distant",
    "config": {
      "sshKeyPath": "",
      "user": "",
      "ipServer": "",
      "pathFile": "",
      "pathWhereScp": "",
      "beforeCmd": "",
      "afterCmd": "",
      "nbDistantToLaunch": 0
    },
    "config": {
      "region": "eu-west-2",
      "imageId": "ami-87848ee3",
      "instanceType": "t2.micro",
      "keyPairName": "amazon-pc_itk_romain",
      "securityGroupIds": ["sg-9372c1fa"],
      "minCount": 10,
      "maxCount": 10,
      "distantConfig": {
        "sshKeyPath": "~/.ssh/amazon-pc_itk_romain",
        "user": "admin",
        "pathFile": "./build/lorhammer",
        "pathWhereScp": "/home/admin/",
        "nbDistantToLaunch": 1
      }
    }
  }
}]
```

# Scenario Parameters

## testType

Type : **string/enum**

Can be `none`, `oneShot`, `repeat` or `ramp`

* `none` no test will be launched, useful to use orchestrator to deploy lorhammer instances for use them in future
* `oneShot` start init.nbGateway with init.nbNodePerGateway[0] >= nbNode <= init.nbNodePerGateway[1]
* `repeat` start init.nbGateway every `repeatTime`
* `ramp` start init.nbGateway / rampTime during `rampTime`
    
## rampTime
    
Type : **string/duration**
 
If `testType` == `ramp` used to smooth init.nbGateway during this duration

## repeatTime 

Type : **string/duration**

If `testType` == `repeat` used to create init.nbGateway every time

## stopAllLorhammerTime 

Type : **string/duration**

After this time orchestrator will stop all scenario in lorhammers, 0 for never

## shutdownAllLorhammerTime 

Type : **string/duration**

After this time orchestrator will stop all lorhammers, 0 for never

## init 

Type : **object/struct**

Represent the lorawan protocol 

### nsAddress 

Type : **string/address**

The ip:port of network-server to stress

### nbGateway 

Type : **int** : The number of gateway to create

### nbNodePerGateway 

Type : **int,int**

The number min and max of node to create by gateway. A random number between range will be used. Use same min,max to not randomize.

### scenarioSleepTime 

Type : **string/duration, string/duration**

Time to sleep before send data of gateways to network server, array value permit to randomise (min, max)

### gatewaySleepTime 

Type : **string/duration, string/duration**

Time to sleep before send data of each gateway to network server, array value permit to randomise (min, max)

## provisioning 

Type : **object/struct**

Represent the provisioning of your sensors in the network-server system

### type 

Type : **string/enum** : Can be `none`, `brocaar` or `semtechv4`

* `none` no provisioning are made
* `brocaar` call the api of lorawanserver and add sensors
* `semtechv4` send tcp order to add gateways and sensors

### config

Type : **object/struct**

Depending on the provisioner

#### apiUrl 

Type : **optionel(string)**
 
Api url for lorawanserver.

#### nsAddress 

Type : **optionel(string)**
 
ip:port to contact semtechv4 network-server

#### asAddress 

Type : **optionel(string)**

ip:port to contact semtechv4 application-server

#### csAddress 

Type : **optionel(string)**

ip:port to contact semtechv4 customer-server

#### ncAddress 

Type : **optionel(string)**

ip:port to contact semtechv4 netwrok-controller

## prometheusCheck 

Type : **array(object/struct)**

Permit to check, at the end of test, if the test is good or not depending on what you want, useful for ci check (exit 1 if check fail)

* query **string** : the prometheus query to execute
* resultMin **int** : the result min you want (if min == max you want only this result)
* resultMax **int** : the result max you want (if min == max you want only this result)
* description **string** : the description logged if check fail
    
## deploy 

Type : **object/struct**

Permit to deploy lorhammer before launching test

### type 

Type : **string/enum**

Can be `none`, `distant` or `amazon`

* `none` no deploy are made
* `distant` make scp to send `deploy.config.pathFile` into distant server and run ssh to start it
* `amazon` use amazon api to create instances and to run lorhammer inside them
    
### config
    
> For more details read the [godoc](/godoc/#type-testsuite) 

# Tips

## All flags

Display all flags available in lorhammer or in orchestrator :

```shell
lorhammer -help
orchestrator -help
```

## Log tools

To see logs of tools, useful to debug, at the root of lorhammer enter :

```shell
docker-compose logs
```

## Orchestrator cli

You can launch orchestrator in cli mode to have some utilities (stop current scenarios, shutdown lorhammers, count lorhammers...)

```shell
ochestrator -consul 127.0.0.1:8500 -cli
```

