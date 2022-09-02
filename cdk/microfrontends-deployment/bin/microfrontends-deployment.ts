#!/usr/bin/env node
import { App } from 'aws-cdk-lib';
import { MicrofrontendsStack } from '../lib/microfrontends-stack';

const app = new App();

new MicrofrontendsStack( app, 'MicrofrontendsStack', {
  env: {account: '094887622066', region: 'us-east-1'},
} );
