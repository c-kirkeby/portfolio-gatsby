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
        sh '''npm install
&& npm run build'''
      }
    }

  }
  environment {
    CI = 'true'
  }
}