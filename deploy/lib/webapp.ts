import { Stack, StackProps } from '@aws-cdk/core'
import * as cdk from '@aws-cdk/core'
import * as s3 from '@aws-cdk/aws-s3'
import * as iam from '@aws-cdk/aws-iam'
import * as cloudfront from '@aws-cdk/aws-cloudfront'
import * as route53 from '@aws-cdk/aws-route53'
import * as certificateManager from '@aws-cdk/aws-certificatemanager'
import * as targets from '@aws-cdk/aws-route53-targets'

const envEU  = { account: '780516830267', region: 'eu-west-1' }


export class WebAppStack extends Stack {
   constructor(scope: cdk.Construct, id: string, props?: StackProps) {
     super(scope, id, { env: envEU })
     const bucket = new s3.Bucket(this, 'MyFirstBucket', {
      bucketName: 'aleksandrakarwowska.pl',
      websiteIndexDocument: 'index.html', 
    })
    const hostedZone = route53.HostedZone.fromLookup(this, 'HostedZone', {
      domainName: 'aleksandrakarwowska.pl',
    })
    const certificate = new certificateManager.DnsValidatedCertificate(this, 'Certificate', {
      domainName: 'aleksandrakarwowska.pl',
      hostedZone,
      region: 'us-east-1'
    });

    const cloudFrontOAI = new cloudfront.OriginAccessIdentity(this, 'OAI')
    
    const distribution = new cloudfront.CloudFrontWebDistribution(this, 'MyDistribution', {
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: bucket,
            originAccessIdentity: cloudFrontOAI,
          },
          behaviors: [{ isDefaultBehavior: true }]
        }
      ],viewerCertificate: cloudfront.ViewerCertificate.fromAcmCertificate(
        certificate,
        {
          aliases: ['aleksandrakarwowska.pl', 'www.aleksandrakarwowska.pl'],
          securityPolicy: cloudfront.SecurityPolicyProtocol.TLS_V1, 
          sslMethod: cloudfront.SSLMethod.SNI, 
        },
      ),
    })
    new route53.ARecord(this, 'Alias', {
      zone: hostedZone,
      target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution))
    })

    bucket.grantRead(cloudFrontOAI.grantPrincipal)
     }
 }