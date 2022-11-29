import { Stack, StackProps } from '@aws-cdk/core'
import * as s3 from '@aws-cdk/aws-s3'
import * as cdk from '@aws-cdk/core'
import * as route53 from '@aws-cdk/aws-route53'
declare const myZone: route53.HostedZone;

export class WebAppStack extends Stack {
   constructor(scope: cdk.Construct, id: string, props?: StackProps) {
      super(scope, id, props)

      new s3.Bucket(this, 'danielakamola.pl', {
         bucketName: 'danielakamola.pl'
      })
      new route53.NsRecord(this, 'NSRecord', {
         zone: myZone,
         recordName: 'danielakamola.pl',
         values: [
            'ns - 435.awsdns - 54.com',
            'ns - 1569.awsdns - 04.co.uk',
            'ns - 1390.awsdns - 45.org',
            'ns - 807.awsdns - 36.net',
         ],
      });

   }
}
