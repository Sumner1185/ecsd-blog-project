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
        sh 'npm test'
        echo 'API TESTS COMPLETE'
      }
    }

    stage('UI Testing') {
      parallel {
        stage('Start Server') {
          steps {
            sh 'npm start&'
          }
        }

        stage('Cypress Tests') {
          steps {
            sh 'npm run test-cypress'
            echo 'TESTING COMPLETE'
          }
        }

      }
    }

    stage('Deploy') {
      steps {
        echo 'Deployed'
      }
    }

  }
}