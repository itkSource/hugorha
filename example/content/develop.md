---
title: "Develop"
menu: 
    main:
        weight: 3
---

# Develop

This page describe how to install the environment to develop on lorhammer. And give some architecture point to help in the development.

# Install

## Requirement

* [Go](https://golang.org/doc/install) >= 1.8
* [Docker](https://docs.docker.com/engine/installation/) & [Docker-compose](https://docs.docker.com/compose/install/).

## Steps

```shell
cd $GOPATH/src
git clone git@gitlab.lan.itkweb.fr:platform-iot/lorhammer.git
cd lorhammer
sh install.sh
```

## Compilation

```shell
sh build.sh
```

The binairies of lorhammers are created in `./build` directory.

## First start

Follow the [quickstart](quickstart) and be sure to have lorhammer, orchestrator and tools working.

# Architecture repair

## Add a test type

TODO make it

## Add a provisioner

## Add a deployer

## Add personal push data