let dbHostName = {value:'', name:`/${this.siteName}/${this.serviceName}/DbHostName`};
let alertServiceName = {value:'', name:`/${this.siteName}/${this.serviceName}/AlertServiceApiUrl`};
this.siteName = 'avlmstd';
this.serviceName = 'AVLMServer';
this.responseModel =[
    {AlertServiceApiUrl:{value:'', name:`/${this.siteName}/${this.serviceName}/AlertServiceApiUrl`} },
    // {DbAvlmDatabaseName:{value:'avlm', name:`/${this.siteName}/${this.serviceName}/DbAvlmDatabaseName`} },
    // {DbDialect:[{value:'postgres', name:`/${this.siteName}/${this.serviceName}/DbDialect`}] },
    {DbHostName:{value:'', name:`/${this.siteName}/${this.serviceName}/DbHostName`}},
    // {DbPassword:[{value:'xxx', name:`/${this.siteName}/${this.serviceName}/DbPassword`} ]},
    // {DbPort:[{value:'5432', name:`/${this.siteName}/${this.serviceName}/DbPort`} ]},
    // {DbUserName:[{value:'xxx', name:`/${this.siteName}/${this.serviceName}/DbUserName`} ]}
];

// this.responseModel.push()
awsPrepParams=[];

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

for(let i =0; i<this.responseModel.length; i++) {
    alertServiceName = typeof(this.responseModel[i]['AlertServiceApiUrl']) !== 'undefined' ? this.responseModel[i]['AlertServiceApiUrl'] : alertServiceName;
    dbHostName = typeof(this.responseModel[i]['DbHostName']) !== 'undefined' ? this.responseModel[i]['DbHostName'] : dbHostName;
    
    // console.log(`typeof(alertServiceName) ${typeof(alertServiceName)}`);
    // console.log(`typeof(DbHostName)${typeof(DbHostName)}`);
    if(typeof(alertServiceName) === 'object' && alertServiceName!==null){
        // console.log(alertServiceName.name)
        awsPrepParams.push(alertServiceName.name)
    }

    if(typeof(DbHostName) === 'object' && DbHostName!==null){
        // console.log(DbHostName.name)
        awsPrepParams.push(dbHostName.name)

}


// console.log(this.responseModel.findIndex(AlertServiceApiUrl));
// call AWS 
}
if ((typeof(this.ssmArray) === 'object') && (Array.isArray(this.ssmArray['Parameters']))) {
    for(let i =0; i<this.ssmArray['Parameters'].length; i++) {
        alertServiceName.value =  this.ssmArray['Parameters'][i].Name === alertServiceName.name ? this.ssmArray['Parameters'][i].Value : alertServiceName.value;
        dbHostName.value =  this.ssmArray['Parameters'][i].Name === dbHostName.name ? this.ssmArray['Parameters'][i].Value : dbHostName.value;
        
            
    }


    // console.log(alertServiceName)
    // console.log(dbHostName)
    this.responseModel.push(alertServiceName);
    this.responseModel.push(dbHostName);
    console.log(this.responseModel);
    // console.log(JSON.stringify(alertServiceName.value));

// if ((typeof(this.ssmArray) === 'object') && (Array.isArray(this.ssmArray['Parameters']))) {
//     for(let i =0; i<this.ssmArray['Parameters'].length; i++) {
//     // let test = this.ssmArray['Parameters'][i].Name.toString().trim() === this.responseModel['AlertServiceApiUrl'];
//     // console.log(this.responseModel[]['AlertServiceApiUrl'].name);
//     console.log(this.responseModel.find('AlertServiceApiUrl'));
//     }
    // let AlertServiceApiUrlValue = typeof(this.ssmArray['Parameters'][i].Value) !== 'undefined' ? this.ssmArray['Parameters'][i].map(item =>{ return item.name === this.responseModel['AlertServiceApiUrl'].name ? item.value : false}) : false;
    // let DbHostValue = typeof(this.ssmArray['Parameters'][i].Value) !== 'undefined' ? this.ssmArray['Parameters'][i].Value : false;
    
    // console.log(`typeof(AlertServiceApiUrlValue) ${typeof(AlertServiceApiUrlValue)} | alertServiceValue ${JSON.stringify(AlertServiceApiUrlValue)}`);
    // console.log(`typeof(DbHostName)${typeof(DbHostName)}`);
    
    // if(typeof(alertServiceName) === 'object' && alertServiceName!==false){
        // console.log(alertServiceName.name)
        // awsPrepParams.push(alertServiceName.name)
    // }

    // if(typeof(DbHostName) === 'object' && DbHostName!==false){
        // console.log(DbHostName.name)
        // awsPrepParams.push(DbHostName.name)
    // }
    }
// }

























// getAwsSsm
    // console.log(alertServiceName.hasOwnProperty('name'))
    
    // if(alertServiceName !== false && alertServiceName.hasOwnProperty('name')){
        //&&typeof(this.responseModel[i]['AlertServiceApiUrl'])==='string') {
        // let dbName = this.responseModel[i]['DbAvlmDatabaseName'];

    // if(alertServiceName.hasOwnProperty('name')) {
    //     console.log(alertServiceName.name)
    //     paramAerray.push(alertServiceName.name)
    // }
    // if(alertServiceName.hasOwnProperty('name')){
        // console.log(alertServiceName)
    //     paramAerray.push(alertServiceName.name)
    // }
// }
// }

// for(let i =0; i<this.responseModel.length; i++) {
//     let p = this.responseModel[i]['DbAvlmDatabaseName'];
//     if(p.hasOwnProperty('name'))
//     console.log(p.name)
// }

// this.params = [];
// for ( let i = 0; i<this.ssmArray['Parameters'].length;i++) {
//     for(let j=0; i<this.responseModel.length;j++) {
//     console.log(this.ssmArray['Parameters'][i].Name)
//     console.log(this.responseModel[j]['AlertServiceApiUrl'].name )

// }
   // if(this.ssmArray['Parameters'][i].Name === this.responseModel[j]['AlertServiceApiUrl'].name )
   // this.responseModel.value = this.ssmArray['Parameters'].Value;
    
// }
// console.log(this.responseModel);
