'use strict';
const aws = require('aws-sdk');

exports.handler = async(event) => {

    // These will come from avlm 
    this.siteName = 'avlmstd';
    this.serviceName = 'AVLMServer';


    // this is new object
    let dbHostObject = { value: '', name: `/${this.siteName}/${this.serviceName}/DbHostName` };
    let alertServiceObject = { value: '', name: `/${this.siteName}/${this.serviceName}/AlertServiceApiUrl` };

    // Object to be returned back to sequalized
    this.responseModel = [];
    this.responseModel.push(alertServiceObject);
    this.responseModel.push(dbHostObject);


    // Object to be sent to AWS
    this.awsPrepParams = [];
    this.awsPrepParams.push(alertServiceObject.name)
    this.awsPrepParams.push(dbHostObject.name)

    const ssm = new aws.SSM({ apiVersion: '2014-11-06' });



    // Prase Aws Parameters
    for (let i = 0; i < this.responseModel.length; i++) {
        let alertServiceName = typeof(this.responseModel[i]['AlertServiceApiUrl']) !== 'undefined' ? this.responseModel[i]['AlertServiceApiUrl'] : '';
        let dbHostName = typeof(this.responseModel[i]['DbHostName']) !== 'undefined' ? this.responseModel[i]['DbHostName'] : '';
        if (typeof(alertServiceName) === 'object' && alertServiceName !== null) {
            this.awsPrepParams.push(alertServiceName.name)
        }

        if (typeof(dbHostName) === 'object' && dbHostName !== null) {
            this.awsPrepParams.push(dbHostName.name)
        }
    }
    console.log('\n ===\n');
    console.log(this.awsPrepParams);



    const ssmRequestParam = {
        Names: this.awsPrepParams,
        WithDecryption: true
    };

    return await ssm
        .getParameters(ssmRequestParam)
        .promise()
        .then((ssmArray) => {
            this.ssmArray = ssmArray;



            // Prase Aws Response 
            if ((typeof(this.ssmArray) === 'object') && (Array.isArray(this.ssmArray['Parameters']))) {
                for (let i = 0; i < this.ssmArray['Parameters'].length; i++) {
                    alertServiceObject.value = this.ssmArray['Parameters'][i].Name === alertServiceObject.name ? this.ssmArray['Parameters'][i].Value : alertServiceObject.value;
                    dbHostObject.value = this.ssmArray['Parameters'][i].Name === dbHostObject.name ? this.ssmArray['Parameters'][i].Value : dbHostObject.value;

                }
            }
            console.log('\n ===\n');
            console.log(this.responseModel);

            return this.responseModel;
        })
        .catch((err) => {
            throw err;
        });
    
};
