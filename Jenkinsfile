pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
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