pipeline {

    agent any

    stages {
        stage('clonacion del repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/julian-iu/final_igweb.git'
            }
    }

        stage('contruccion de la imagen docker') {
            steps {
                script {
                    withCredentials([
                        string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI' )
                    ])  {
                            docker.build('proyecto-monolitica:v2', '--build-arg MONGO_URI=${MONGO_URI} .')
                    }
                }
                
            }

    }

        stage('despliegue del contenedor docker'){
            steps {
                  script {
                    withCredentials([
                            string(credentialsId: 'MONGO_URI', variable: 'MONGO_URI')
                    ]) {
                        sh 'docker-compose up -d'
                    }
                
            }

    }
}
    
}
}
