pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh """
                    echo 'BRANCH_NAME:' $BRANCH_NAME
                    echo 'CHANGE_ID:' $CHANGE_ID
                    echo 'JOB_DISPLAY_URL:' $JOB_DISPLAY_URL
                    echo 'RUN_DISPLAY_URL:' $RUN_DISPLAY_URL
                    echo 'BUILD_NUMBER:' $BUILD_NUMBER
                    echo 'BUILD_ID:' $BUILD_ID
                    echo 'GIT_COMMIT:' $GIT_COMMIT
                    echo 'GIT_BRANCH:' $GIT_BRANCH
                    echo 'GIT_CHECKOUT_DIR:' $GIT_CHECKOUT_DIR
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
