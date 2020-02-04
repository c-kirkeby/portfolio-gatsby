pipeline {
  agent {
    docker {
      image 'node:lts-alpine'
      args '-p 8000:8000'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'yarn'
        sh 'yarn bootstrap'
        sh ' yarn build'
      }
    }

  }
  environment {
    CI = 'true'
  }
}