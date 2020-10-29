pipeline { 
    agent any 
        stages {
            stage("Build") {
                steps {
                    sh "sh ./scripts/files.sh"
                    sh "npm install"
                }
            }
            stage("Testing") {
                steps {
                    sh "npm test"
                    echo 'API TESTS COMPLETE'
                }
            }
            stage('UI Testing') {
                steps {
                    sh "npm start"
                    sh 'npm run test-cypress'
                    echo 'TESTING COMPLETE'
            }
            }
            
            stage("Deploy") {
                steps {
                    echo "Deployed"
                }
            }
        }
}


