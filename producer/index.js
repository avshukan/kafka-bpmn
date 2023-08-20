const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'producer',
  brokers: ['kafka:29092']
})

const producer = kafka.producer();

const TOPIC = 'topic';
const MESSAGE = 'Hello, world!';
const SECONDS = 20000;
let counter = 1;

const send = async (producer, topic, text, seconds) => {
  await producer.send({
    topic,
    messages: [
      { value: `${counter}: ${text}` },
    ],
  });
  counter += 1;
  setTimeout(async () => {
    await send(producer, topic, text, seconds)
  }, seconds);
}

const run = async () => {
  await producer.connect();
  await send(producer, TOPIC, MESSAGE, SECONDS);
};

run().catch(console.error)
