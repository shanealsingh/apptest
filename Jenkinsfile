pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh (
                    script: "BRANCH_NAME $env.BRANCH_NAME",
                    returnStdout: true
                ).trim()
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
