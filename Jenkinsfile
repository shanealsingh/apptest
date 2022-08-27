void setBuildStatus(String message, String state) {
  step([
      $class: "GitHubCommitStatusSetter",
      reposSource: [$class: "ManuallyEnteredRepositorySource", url: "https://github.com/shanealsingh/apptest"],
      contextSource: [$class: "ManuallyEnteredCommitContextSource", context: "ci/jenkins/build-status"],
      errorHandlers: [[$class: "ChangingBuildStatusErrorHandler", result: "UNSTABLE"]],
      statusResultSource: [ $class: "ConditionalStatusResultSource", results: [[$class: "AnyBuildResult", message: message, state: state]] ]
  ]);
}

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
                """
                setBuildStatus("Build complete", "SUCCESS");
            }
        }
        stage('Test') {
            steps {
              setBuildStatus("Test complete", "SUCCESS");
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}