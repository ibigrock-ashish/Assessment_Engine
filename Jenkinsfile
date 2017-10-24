node {
  stage: 'Environment Variables'
  sh "env"

  stage: 'Clean'
  sh "rm dist -rf"


 stage 'Checkout Repository'
 git url: 'https://github.com/stackroute-immersive-wave/Assessment_Engine.git', branch: 'master'
  

  stage 'Testing'
  sh "mvn test"


}