import json
import pika

connection = pika.BlockingConnection(pika.ConnectionParameters(
    host='localhost', port=5674
))
channel = connection.channel()

channel.queue_declare(queue='hello')

body = {
    'title': 'Hi!',
    'content': 'Hello world',
    'source': 'python dum-e producer'
}
channel.basic_publish(
    exchange='', body=json.dumps(body),
    routing_key='rideoctane-widget-generation',
)
channel.basic_publish(
    exchange='', body="Hellow world!",
    routing_key='rideoctane-widget-generation',
)
print(" [x] Sent 'Hello World!'")

connection.close()
