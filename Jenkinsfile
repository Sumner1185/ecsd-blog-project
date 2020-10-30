pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'sh ./scripts/files.sh'
        sh 'npm install'
      }
    }

    stage('Jest Tests') {
      steps {
        sh '''npm start&
npm test'''
        echo 'API TESTS COMPLETE'
      }
    }

    stage('Cypress Tests') {
      steps {
        sh 'npm run test-cypress'
        echo 'TESTING COMPLETE'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deployed'
      }
    }

  }
}