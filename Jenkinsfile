pipeline{
    agent any
    tools {
        nodejs "Node26"
        
    }
    parameters {
        string(name: 'Test_command', defaultValue: 'npx playwright test', description: 'Enter the playwright command')
    }
    environment{
        CI="true"
    }
    stages{
        stage('git checkout'){
            steps{
                checkout scm
            }
        }
        stage('Install dependencies'){
            steps{
                bat 'npm install'
            }
        }
        stage('install browsers'){
            steps{
                bat 'npx playwright install --with-deps'
            }
        }
        stage('run playwright tests'){
            steps{
                bat "${params.Test_command}"
            }
        }
    }
    post{
        always {

            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true

            publishHTML([

                allowMissing: true,

                alwaysLinkToLastBuild: true,

                keepAll: true,

                reportDir: 'playwright-report',

                reportFiles: 'index.html',

                reportName: 'Playwright Report'

            ])

        }

    }
    }