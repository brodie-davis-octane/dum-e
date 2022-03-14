# Dum-E POC

Proof of Concept(s) for Widget file Generation

![](https://64.media.tumblr.com/47fba3be04dfbce78cff2f80107c2bb0/tumblr_n15xraItP41qglwp9o3_r1_250.gifv)

## Web Bundler

Run all commands from the root of the repository

#### Setup

- Install dependencies with `npm install`

### Webpack

- Run `npm run parcel` to generate a bundle
- Load the file `dist/index.html` in a browser
  - Observe the console.log messages from both `index.js` and `index.min.js
  - Check for the files sources in the Sources tab of your browser's dev tools 
- Try changing or adding a value in `webpack/index.ts#overrides`
  - Any values defined here (even nested values like `urls.apiBaseUrl`) will be overridden in frontend
- After changing a value, rebuilt the application and observe the changed value on `window.olCtaWidget`

### Parcel

Parcel currently isn't working. Parcel and webpack use a shared src/ directory,
and the changes for webpack broke the Parcel method. Parcel didn't seem like a great option,
so Parcel functionality was never fixed.

Still, a bundle can be produced with `npm run parcel`

## Remote Processs Communication (RPC) Usage

Run all commands from the `rpc/` folder.

#### Setup

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