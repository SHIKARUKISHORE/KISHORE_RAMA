pipeline {
  agent any

  stages {
    stage('Build Frontend') {
      steps {
        dir('frontend-folder') {
          sh 'npm install'
          sh 'npm run build'
        }
      }
    }
  }
}
