pipeline {
  agent any

  environment {
    NODEJS_HOME = tool name: 'NodeJS 18', type: 'NodeJSInstallation'
    PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"
    DOTNET_ROOT = tool name: 'dotnet6', type: 'dotnet'
  }

  stages {

    stage('Checkout Code') {
      steps {
        git url: https://github.com/SHIKARUKISHORE/KISHORE_RAMA.git', branch: 'main'
      }
    }

    stage('Build Frontend (React)') {
      steps {
        dir('frontend') {
          sh 'npm install'
          sh 'npm run build'
        }
      }
    }

    stage('Build Backend (.NET Web API)') {
      steps {
        dir('backend') {
          sh "${env.DOTNET_ROOT}/dotnet restore"
          sh "${env.DOTNET_ROOT}/dotnet build --configuration Release"
        }
      }
    }

    stage('Test Backend') {
      steps {
        dir('backend') {
          sh "${env.DOTNET_ROOT}/dotnet test"
        }
      }
    }

    stage('Publish Backend') {
      steps {
        dir('backend') {
          sh "${env.DOTNET_ROOT}/dotnet publish -c Release -o publish"
        }
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying frontend and backend...'
        // Add deployment steps (e.g. copy files to server, restart services, etc.)
      }
    }
  }
}
