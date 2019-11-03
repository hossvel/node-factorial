pipeline {
  agent any
  tools {
    nodejs 'Node-11.0.0'
  }

  options {
    timeout(time: 2, unit: 'MINUTES')
  }

  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Run tests') {
      steps {
        sh 'npm test'
      }
    }
  }
}