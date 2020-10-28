pipeline { 
    agent any 
        stages {
            stage("Build") {
                steps {
                    sh "sh ./scripts/files.sh"
                    sh "npm install"
                }
            }
            stage("Test") {
                steps {
                    sh "npm test"
                }
            }
            stage("Deploy") {
                steps {
                    echo "Deployed"
                }
            }
        }
}
