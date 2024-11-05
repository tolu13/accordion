

const dummyApiResponse = {
    showLightAndDarkMode: true,
    showQrCodeGenerator: true,
    showRandomColorGenerator: true,
    showAccordian: false,
    showTreeView: true
}


function featureFlagsDataServiceCall(){

    return new Promise((resolve, reject)=> {
        if(dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
        else reject("Some error Please try again")
    });
}

export default featureFlagsDataServiceCall;