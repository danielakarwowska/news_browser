#!/usr/bin/env node
import * as cdk from '@aws-cdk/core'
import {WebAppStack} from '../lib/webapp'

const app = new cdk.App()
new WebAppStack(app, 'WebAppStack')
