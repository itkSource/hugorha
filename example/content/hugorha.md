---
title: "Hugorha"
menu: "main"
---

# Lorhammer

> Stress your lora network-server

## Install

### Requirement :

* Go 1.8 follow [install guide](https://golang.org/doc/install)
* Docker & Docker-compose

### Steps

```shell
cd $GOPATH/src
git clone git@gitlab.lan.itkweb.fr:platform-iot/lorhammer.git
cd lorhammer
sh install.sh
```

## Launch

Lorhammer project is composed of 2 binaries :

* lorhammer is responsible to mimic x gateways. It handles the lorawan standard and stress the NetworkServer.
* orchestrator is responsible to manage more complex scenarios with multiple lorhammers.

You can launch a single lorhammer, or launch multiples lorhammer with one orchestrator.
   
### Simple

```shell
sh build.sh
./build/lorhammer -nb-gateway 1 -ns-ip 0.0.0.0 -ns-port 1700
```

The lorhammer will send requests to NetworkServer, but you can see nothing because results are garbage by prometheus and displayed by grafana.
See next section to launch them.

### All tools 

Before launching all tools, you need to add environment variables to specify the ips needed for everything to run correctly.
Here are environment variables to add on your side (These ips are most likely to be your local one, unless you are running in docker environment or a remote instance). 

* **LORHAMMER_CONSUL_IP** : the ip address used to contact consul
* **LORHAMMER_PROMETHEUS_IP** : the ip address used to run prometheus
* **LORHAMMER_MQTT_IP** : the ip address used to run mqtt used for cross tool communication
* **LORHAMMER_MQTT_IP** : the ip address used to access grafana

```shell
sh ./resources/scripts/launchTools.sh
```

Will launch :

* Prometheus to manage metrics ([web application](http://127.0.0.1:9090))
* Grafana to chart metrics from prometheus ([web application](http://127.0.0.1:3000))
* Consul to discover lorhammer services
* Mqtt-broker to communicate between orchestrator and lorhammer

All data will be stored in `./data` directory, to clean them `sudo rm -rf data`.

### Orchestrator

When all tools are launched you can start x lorhammers and finally one orchestrator. 

To start lorhammers :

```shell
./build/lorhammer -consul CONSUL_IP:CONSUL_PORT
```

To start orchestrator :

```shell
./build/orchestrator -consul CONSUL_IP:CONSUL_PORT -from-file "./resources/scenarios/simple.json"
```

The test will start immediately.

## Visualize

To visualize results of your test, you need to open grafana [web application](http://127.0.0.1:3000), login with `admin` and `pass`.
Import into grafana the datasource and dashboards from `resources/grafana`.
Then go to the dashboard `Lora` and you will see some indicators on what happens in your system.
