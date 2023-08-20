'use strict';

const {Engine} = require('bpmn-engine');
const fs = require('fs');
const bent = require('bent');

const source = fs.readFileSync('./bpmn.xml');

const engine = new Engine({
  name: 'script task example',
  source
});

// engine.execute({
//   variables: {
//     scriptTaskCompleted: false
//   },
//   services: {
//     get: bent('json'),
//     set,
//   }
// });

engine.on('end', (execution) => {
  console.log('Output:', execution.environment.output);
});

function set(activity, name, value) {
  activity.logger.debug('set', name, 'to', value);
}

const bpmn = async () => {
    await engine.execute({
        variables: {
            scriptTaskCompleted: false
        },
        services: {
            get: bent('json'),
            set,
        }
    });
  };

module.exports = bpmn;
