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
        sh 'pwd'
        sh 'base=$(basename $PWD)'
        sh 'cd ..'
        tar -czf $base.tar.gz $base
        sh 'tar -zcvf build.tgz $base'
        archiveArtifacts artifacts: 'build.tgz', fingerprint: true, followSymlinks: false
        sshPublisher(publishers: [sshPublisherDesc(configName: 'Web', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '''tar -zxvf build.tgz && mv build /var/www/html
      cd /var/www/html/build
      npm start&''', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', sourceFiles: 'build.tgz')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
        echo 'Deployed'
      }
    }

  }
}