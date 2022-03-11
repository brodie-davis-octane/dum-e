var amqp = require('amqplib/callback_api');


amqp.connect('amqp://127.0.0.1:5674', function(connectionError, connection) {
    if (connectionError) {
        throw connectionError;
    }

    connection.createChannel(function(channelError, channel) {
        if (channelError) {
            throw channelError;
        }

        // ensure the queue exists
        const queue = 'rideoctane-widget-generation';
        channel.assertQueue(queue, {
            durable: false
        });

        let msg = {
            'title': 'blah',
            'content': 'Hello world',
            'source': 'typescript'
        };
        for(let i=0; i < 5; i++) {
            channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)));
            channel.sendToQueue(queue, Buffer.from("hellow world"));
            console.log(" [x] Sent %s", msg);
        }

        // exit after last message is published
        setTimeout(() => process.exit(0), 100)
    });
});
