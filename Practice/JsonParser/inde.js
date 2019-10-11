let data = {
    "data": {
      "type": "vehicleEvent",
      "id": "string",
      "attributes": {
        "content": {
          "type": "doorOpen",
          "actualTime": "2019-10-10T16:36:19.232Z"
        },
        "vehicle": {
          "id": "string",
          "callSign": "string"
        }
      },
      "links": {
        "self": "http://exampleurl"
      }
    }
  };

  let message = [{"":""}]; // string
  // let message = 'undefined'; // string
  //  let message = null; // object
  //  let message; //undefined
  console.log(typeof(message));