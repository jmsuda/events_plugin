var shared = {};

//$(function(){

//});

  console.log("searchEvents!!!");
  getApikey();



function getApikey(){
   
  var loaderScripts = [];
  var scripts = document.getElementsByTagName('script');
  var scriptsLen = scripts.length;
  var apikey = "";
  for (var i = 0; i < scriptsLen; i++) {
    var s = scripts[i];
    var correctLoaderSrc = /.*\/\/static.chaordicsystems.com\/static\/loader.js.*/;
    if (s.getAttribute('src') && s.getAttribute('src').match(correctLoaderSrc)) {
      loaderScripts.push(s);
      apikey = s.getAttribute('data-apikey');
      i = scriptsLen;
    } 

  }
  shared.loaderScripts = loaderScripts;
  shared.hasLoader = loaderScripts.length > 0;
  console.log("TESTE 39: " + shared.hasLoader + "loader: " + shared.loaderScripts[0].src + "APIKEY: " + apikey);

  if(shared.hasLoader && (apikey != null && apikey != "")){
    return apikey;  
  }

}


//chrome.webRequest.onCompleted.addListener(function callback, filters)

//chrome.webRequest.onCompleted.addListener(function callback)
// chrome.webRequest.onCompleted.addListener(
//         function(details) {
//           for (var i = 0; i < details.requestHeaders.length; ++i) {
//             if (details.requestHeaders[i].name === 'User-Agent') {
//               details.requestHeaders.splice(i, 1);
//               break;
//             }
//           }
//           return {requestHeaders: details.requestHeaders};
//         },
//         {urls: ["<all_urls>"]},
//         ["blocking", "requestHeaders"]);





