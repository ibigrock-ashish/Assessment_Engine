node {
  stage: 'Environment Variables'
  sh "env"

  stage: 'Clean'
  sh "rm dist -rf"

  stage 'Checkout Repository'
  git url: 'https://github.com/stackroute-immersive-wave/Assessment_Engine.git', branch: "${env.master}"

  stage 'Installing Dependencies'
  sh "npm prune"
  sh "npm install"

  stage 'Testing'
  sh "npm test"

  stage 'Build'
  sh "mkdir dist -p"
  sh "cp package.json dist && cd dist && tar cvzf my-ci-project_current.tar.gz *"
  step([$class: 'ArtifactArchiver', artifacts: 'dist/*.tar.gz', fingerprint: true])
}