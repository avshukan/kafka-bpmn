const { Kafka } = require('kafkajs')
const bpmn = require('./bpmn.js');

const kafka = new Kafka({
  clientId: 'consumer',
  brokers: ['kafka:29092']
});

const consumer = kafka.consumer({ groupId: 'consumer' });

const TOPIC = 'topic';

async function run() {
  await consumer.connect();

  await consumer.subscribe({ topics: [TOPIC] });

  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log('start of message processing');
      console.log({ value: message.value.toString() });
      await bpmn();
      console.log('finish of message processing');
    },
  });
};

run().catch(console.error);
