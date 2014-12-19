
// chrome.webRequest.onCompleted.addListener(function(details) {
//     console.log('REQUEST COMPLETED');
//     var headers = details.requestHeaders
//     console.log(headers);


// },  {urls: ["<all_urls>"]});


chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
    console.log('ALL SENT REQUESTS------------');
    var headers = details.requestHeaders
    console.log("tamanho - "+ headers.length);
    for(var i = 0; i < headers.length; i++ ){
    	console.log(headers[i].value);
    }
    console.log(JSON.stringify(details));

},  {urls: ["http://www.blablabla.com/" ]}, ['requestHeaders','blocking']);




function click(e){
	chrome.tabs.query({currentWindow:true, active:true}, function(tabs){
		chrome.tabs.executeScript(null, {file: "scripts/searchEvents.js"});
	});
}

chrome.browserAction.onClicked.addListener(click);

//https://developer.chrome.com/extensions/devtools_network
//ver isso http://stackoverflow.com/questions/15891827/chrome-api-responseheaders

// chrome.webRequest.onBeforeSendHeaders.addListener(function(details){
//   //console.log(JSON.stringify(details));
//   var headers = details.requestHeaders,
//   blockingResponse = {};

//   // Each header parameter is stored in an array. Since Chrome
//   // makes no guarantee about the contents/order of this array,
//   // you'll have to iterate through it to find for the
//   // 'User-Agent' element
//   for( var i = 0, l = headers.length; i < l; ++i ) {
//     if( headers[i].name == 'User-Agent' ) {
//       headers[i].value = '>>> Your new user agent string here <<<';
//       console.log(headers[i].value + 'TESTE!!!');
//       break;
//     }
//     // If you want to modify other headers, this is the place to
//     // do it. Either remove the 'break;' statement and add in more
//     // conditionals or use a 'switch' statement on 'headers[i].name'
//   }}