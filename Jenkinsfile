pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Build'
                echo 'BRANCH_NAME' env.BRANCH_NAME
                echo 'CHANGE_ID' env.CHANGE_ID
                echo 'JOB_DISPLAY_URL' env.JOB_DISPLAY_URL
                echo 'RUN_DISPLAY_URL' env.RUN_DISPLAY_URL
                echo 'BUILD_NUMBER' env.BUILD_NUMBER
                echo 'BUILD_ID' env.BUILD_ID
                echo 'GIT_COMMIT' env.GIT_COMMIT
                echo 'GIT_BRANCH' env.GIT_BRANCH
                echo 'GIT_LOCAL_BRANCH' env.GIT_LOCAL_BRANCH
                echo 'GIT_CHECKOUT_DIR' env.GIT_CHECKOUT_DIR
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
