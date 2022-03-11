# Dum-E POC

Proof of Concept(s) for Widget file Generation

![](https://64.media.tumblr.com/47fba3be04dfbce78cff2f80107c2bb0/tumblr_n15xraItP41qglwp9o3_r1_250.gifv)

## Setup

1. This requires RabbitMQ to be running on your local system.
   Starting the Ride Octane API will start RabbitMQ locally and publish it on port 5674.

2. Install the following node packages:

```bash
npm install koa @koa/router amqplib
```

3. Create a virtual environment and install the required python packages

```bash
python3 -m  venv venv
. venv/bin/activate
pip install -U pip
pip install -r requirements.txt
```

## RPC Usage

Run all commands from the `rpc/` folder.

#### Setup

Run `npm i`


### AMQ

1. Start the consumer using `node dum-e-queue-poc.ts`

2. In another terminal, run on of the producers:

```bash
python dum-e-queue-producer.py
```

```bash
node dum-e-queue-producer.ts
```

### REST

1. Start the server using `node rpc/dum-e-rest-poc.ts`
2. Create a post request using curl / postman.

```
curl -X POST localhost:1986/generate
```