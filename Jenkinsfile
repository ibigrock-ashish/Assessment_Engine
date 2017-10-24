node {
  stage: 'Environment Variables'
  sh "env"

  stage: 'Clean'
  sh "rm dist -rf"

  stage 'Checkout Repository'
  git url: 'https://github.com/stackroute-immersive-wave/Assessment_Engine.git', branch: "${env.master}"
  git clone git@github.com:stackroute-immersive-wave/Assessment_Engine.git


  stage 'Testing'
  sh "mvn test"


}