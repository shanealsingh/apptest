pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh """
                    'BRANCH_NAME' $BRANCH_NAME
                """
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
