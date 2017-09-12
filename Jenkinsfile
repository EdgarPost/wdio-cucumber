pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm --version'
            }
        }
        stage('Test') {
            steps {
                sh 'npm install'
                sh 'npm start'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying to local....'
            }
        }
    }
}