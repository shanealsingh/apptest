pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh echo 'Build',
                sh echo 'BRANCH_NAME' env.BRANCH_NAME,
                sh echo 'CHANGE_ID' env.CHANGE_ID,
                sh echo 'JOB_DISPLAY_URL' env.JOB_DISPLAY_URL,
                sh echo 'RUN_DISPLAY_URL' env.RUN_DISPLAY_URL,
                sh echo 'BUILD_NUMBER' env.BUILD_NUMBER,
                sh echo 'BUILD_ID' env.BUILD_ID,
                sh echo 'GIT_COMMIT' env.GIT_COMMIT,
                sh echo 'GIT_BRANCH' env.GIT_BRANCH,
                sh echo 'GIT_LOCAL_BRANCH' env.GIT_LOCAL_BRANCH,
                sh echo 'GIT_CHECKOUT_DIR' env.GIT_CHECKOUT_DIR
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
