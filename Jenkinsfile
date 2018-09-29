pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
      args '-v /.cache/ -v /.bower/  -v /.config/configstore/'
    }
  }

  stages {
    stage('Setup') {
      steps {
        sh "echo Setup Stage"
        sh "echo Install dependencies"
        sh "ls -la"
        sh "npm install"
        sh "npm install -g @angular/cli"
      }
    }

    stage('Build') {
      steps {
        sh "ng test"
        sh "ng build"
      }
    }

    stage('Test') {
      steps {
        sh "echo Test Stage"
      }
    }

    stage('Deploy') {
      steps {
        sh "echo Deploy Stage"
      }
    }
  }
}
