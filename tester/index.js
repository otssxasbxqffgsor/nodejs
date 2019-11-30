this.responseModel =[
    {AlertServiceApiUrl:{value:'', url:`/${this.siteName}/${this.serviceName}/AlertServiceApiUrl`} },
    {DbAvlmDatabaseName:{value:'avlm', url:`/${this.siteName}/${this.serviceName}/DbAvlmDatabaseName`} },
    {DbDialect:{value:'postgres', url:`/${this.siteName}/${this.serviceName}/DbDialect`} },
    {DbHostName:{value:'', url:`/${this.siteName}/${this.serviceName}/DbHostName`} },
    {DbPassword:{value:'xxx', url:`/${this.siteName}/${this.serviceName}/DbPassword`} },
    {DbPort:{value:'5432', url:`/${this.siteName}/${this.serviceName}/DbPort`} },
    {DbUserName:{value:'xxx', url:`/${this.siteName}/${this.serviceName}/DbUserName`} },

];

this.ssmArray = {"Parameters":[{"Name":"/avlmstd/AVLMServer/AlertServiceApiUrl","Type":"String","Value":"https://iq.avlmstddev.ddsdeploytest.com/alert","Version":1,"LastModifiedDate":"2019-09-27T21:47:36.477Z","ARN":"arn:aws:ssm:us-west-2:375039384843:parameter/avlmstd/AVLMServer/AlertServiceApiUrl"},{"Name":"/avlmstd/AVLMServer/DbAvlmDatabaseName","Type":"String","Value":"avlm","Version":1,"LastModifiedDate":"2019-09-27T21:47:08.471Z","ARN":"arn:aws:ssm:us-west-2:375039384843:parameter/avlmstd/AVLMServer/DbAvlmDatabaseName"},{"Name":"/avlmstd/AVLMServer/DbDialect","Type":"String","Value":"postgres","Version":1,"LastModifiedDate":"2019-09-27T21:47:12.548Z","ARN":"arn:aws:ssm:us-west-2:375039384843:parameter/avlmstd/AVLMServer/DbDialect"},{"Name":"/avlmstd/AVLMServer/DbHostName","Type":"String","Value":"main-dev-rds.cff9r5lsohze.us-west-2.rds.amazonaws.com","Version":1,"LastModifiedDate":"2019-09-27T21:58:37.391Z","ARN":"arn:aws:ssm:us-west-2:375039384843:parameter/avlmstd/AVLMServer/DbHostName"},{"Name":"/avlmstd/AVLMServer/DbPassword","Type":"String","Value":"xxx","Version":1,"LastModifiedDate":"2019-09-27T21:47:12.562Z","ARN":"arn:aws:ssm:us-west-2:375039384843:parameter/avlmstd/AVLMServer/DbPassword"},{"Name":"/avlmstd/AVLMServer/DbPort","Type":"String","Value":"5432","Version":1,"LastModifiedDate":"2019-09-27T21:47:12.221Z","ARN":"arn:aws:ssm:us-west-2:375039384843:parameter/avlmstd/AVLMServer/DbPort"},{"Name":"/avlmstd/AVLMServer/DbUserName","Type":"String","Value":"xxx","Version":1,"LastModifiedDate":"2019-09-27T21:47:22.962Z","ARN":"arn:aws:ssm:us-west-2:375039384843:parameter/avlmstd/AVLMServer/DbUserName"}],"InvalidParameters":[]}

this.ssmParamUrls.push(this.responseModel.AlertServiceApiUrl.url);
this.ssmParamUrls.push(this.responseModel.AlertServiceApiUrl.DbHostName);


const ssmRequestParam = {
    Names: ()=>{
        let array = [];
        this.responseModel.forEach
    },
    WithDecryption: true
};
console.log('end');



