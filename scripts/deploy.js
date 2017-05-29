#!/usr/bin/env node

const {deploymentFactory, run} = require('@carnesen/aws')

const deployment = deploymentFactory({priority: -1})

run(deployment.create)
