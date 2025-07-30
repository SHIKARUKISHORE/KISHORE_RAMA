pipeline {
  agent any

  environment {
    NODEJS_HOME = tool name: 'NodeJS 18', type: 'NodeJSInstallation'
    PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"
  }

  stages {
    stage('Frontend Build') {
      steps {
        dir('frontend-folder') {
          sh 'npm install'
          sh 'npm run build'
        }
      }
    }

    stage('Backend Build') {
      steps {
        dir('backend-folder') {
          bat 'dotnet build'
        }
      }
    }

    stage('Backend Test') {
      steps {
        dir('backend-folder') {
          bat 'dotnet test'
        }
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deployment step goes here'
      }
    }
  }
}
