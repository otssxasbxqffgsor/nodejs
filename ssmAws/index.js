// These will come from avlm 
this.siteName = 'avlmstd';
this.serviceName = 'AVLMServer';


// this is new object
let dbHostObject = {value:'', name:`/${this.siteName}/${this.serviceName}/DbHostName`};
let alertServiceObject = {value:'', name:`/${this.siteName}/${this.serviceName}/AlertServiceApiUrl`};

// Object to be returned back to sequalized
this.responseModel =[];
this.responseModel.push(alertServiceObject);
this.responseModel.push(dbHostObject);


// Object to be sent to AWS
this.awsPrepParams=[];
this.awsPrepParams.push(alertServiceObject.name)
this.awsPrepParams.push(dbHostObject.name)

this.ssmArray = {
    "Parameters":[
    {
        "Name":"/avlmstd/AVLMServer/AlertServiceApiUrl",
        "Type":"String",
        "Value":"https://iq.avlmstddev.ddsdeploytest.com/alert",
        "Version":1,
        "LastModifiedDate":"2019-09-27T21:47:36.477Z",
        "ARN":"arn:aws:ssm:us-west-2:375039384843:parameter/avlmstd/AVLMServer/AlertServiceApiUrl"
    },
    {
        "Name":"/avlmstd/AVLMServer/DbAvlmDatabaseName",
        "Type":"String",
        "Value":"avlm",
        "Version":1,
        "LastModifiedDate":"2019-09-27T21:47:08.471Z",
        "ARN":"arn:aws:ssm:us-west-2:375039384843:parameter/avlmstd/AVLMServer/DbAvlmDatabaseName"
    },
    {
        "Name":"/avlmstd/AVLMServer/DbDialect",
        "Type":"String",
        "Value":"postgres",
        "Version":1,
        "LastModifiedDate":"2019-09-27T21:47:12.548Z",
        "ARN":"arn:aws:ssm:us-west-2:375039384843:parameter/avlmstd/AVLMServer/DbDialect"
    },
    {
        "Name":"/avlmstd/AVLMServer/DbHostName",
        "Type":"String",
        "Value":"main-dev-rds.cff9r5lsohze.us-west-2.rds.amazonaws.com",
        "Version":1,
        "LastModifiedDate":"2019-09-27T21:58:37.391Z",
        "ARN":"arn:aws:ssm:us-west-2:375039384843:parameter/avlmstd/AVLMServer/DbHostName"
    },
    {
        "Name":"/avlmstd/AVLMServer/DbPassword",
        "Type":"String",
        "Value":"xxx",
        "Version":1,
        "LastModifiedDate":"2019-09-27T21:47:12.562Z",
        "ARN":"arn:aws:ssm:us-west-2:375039384843:parameter/avlmstd/AVLMServer/DbPassword"
    },
    {
        "Name":"/avlmstd/AVLMServer/DbPort",
        "Type":"String",
        "Value":"5432",
        "Version":1,
        "LastModifiedDate":"2019-09-27T21:47:12.221Z",
        "ARN":"arn:aws:ssm:us-west-2:375039384843:parameter/avlmstd/AVLMServer/DbPort"
    },
    {
        "Name":"/avlmstd/AVLMServer/DbUserName",
        "Type":"String",
        "Value":"xxx",
        "Version":1,
        "LastModifiedDate":"2019-09-27T21:47:22.962Z",
        "ARN":"arn:aws:ssm:us-west-2:375039384843:parameter/avlmstd/AVLMServer/DbUserName"
    }
],
"InvalidParameters":[]}





// Prase Aws Parameters
for(let i =0; i<this.responseModel.length; i++) {
   let alertServiceName = typeof(this.responseModel[i]['AlertServiceApiUrl']) !== 'undefined' ? this.responseModel[i]['AlertServiceApiUrl'] : null;
    let dbHostName = typeof(this.responseModel[i]['DbHostName']) !== 'undefined' ? this.responseModel[i]['DbHostName'] : null;
    if(typeof(alertServiceName) === 'object' && alertServiceName!==null){
        awsPrepParams.push(alertServiceName.name)
    }

    if(typeof(DbHostName) === 'object' && DbHostName!==null){
        awsPrepParams.push(dbHostName.name)
    }
}
console.log('\n ===\n');
console.log(this.awsPrepParams);


// Prase Aws Response 
if ((typeof(this.ssmArray) === 'object') && (Array.isArray(this.ssmArray['Parameters']))) {
    for(let i =0; i<this.ssmArray['Parameters'].length; i++) {
        alertServiceObject.value =  this.ssmArray['Parameters'][i].Name === alertServiceObject.name ? this.ssmArray['Parameters'][i].Value : alertServiceObject.value;
        dbHostObject.value =  this.ssmArray['Parameters'][i].Name === dbHostObject.name ? this.ssmArray['Parameters'][i].Value : dbHostObject.value;
        
    }       
}


console.log('\n ===\n');    
console.log(this.responseModel);