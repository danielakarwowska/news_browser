import {Stack, StackProps} from '@aws-cdk/core'
import * as cdk from '@aws-cdk/core'

export class WebAppStack extends Stack {
   constructor(scope: cdk.Construct, id: string, props?: StackProps) {
      super(scope, id, props)
   }
}
