/*
 * PoC AMQ Client
 */

var amqp = require('amqplib/callback_api');

const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));
async function doGenerate(domain) {
    console.log(`starting generation of domain`, domain)
    // pendingGeneration.push(domain)
    await snooze(5000)
    // todo is this even thread safe? We're also kind of building a task queue anyways
    // pendingGeneration = pendingGeneration.filter(item => item !== domain)
    console.log(`generation complete for domain`, domain)
}

amqp.connect('amqp://localhost:5674', async function(connectionError, connection) {
    if (connectionError) {
        throw connectionError;
    }

    const channel = await connection.createChannel();
    // consume one message at a time
    channel.prefetch(1);

    // ensure the queue exists
    const queue = 'rideoctane-widget-generation';
    channel.assertQueue(queue, {
        durable: false
    });

    async function messageConsumer(msg) {
        console.debug("Received %s", msg.content.toString());
        await channel.ack(msg)

        let body;
        try {
            body = JSON.parse(msg.content.toString());
        } catch (e) {
            console.error(`failed to parse message: ${e}`);
            return;
        }

        console.log("parsed message", body);
        await doGenerate(body);
    }

    console.log("Waiting for messages in %s. To exit press CTRL+C", queue);
    channel.consume(
        queue, messageConsumer, {noAck: false},
        (err, {consumerTag}) => console.log(`Consumer Tag is ${consumerTag}`)
    );
});
