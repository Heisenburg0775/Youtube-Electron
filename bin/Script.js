async function Main() {
    //Takes input value
try{
  document.getElementById("internet").style.display = "none"
  var input = document.querySelector(".search-input").value;
  if(validate(input)){
    document.getElementById("internet").textContent = "Please provide valid input"
    document.getElementById("internet").style.display = 'block';
  }else{
    //Searchs for the video
    document.getElementById("internet").style.text = "none"
    document.getElementById("internet").textContent = "No Internet"
  let result = await (await $(input, { pages: 1 })).items[0];
  //Getting Formats
  var info = await _.getInfo(result.url);
  //Editing Now playing title
  var nowplaying = document.querySelector(".np");
  nowplaying.innerHTML = result.title;
  //Video Details
  var title = result.title;
  var views = result.views
  var uploader =result.author.name;
  var subs = info.videoDetails.author.subscriber_count;
  var date = info.videoDetails.uploadDate;
  var id = info.videoDetails.videoId;
  var element_title = document.querySelector(".maintitle")
  var element_views = document.querySelector(".mainviews")
  var element_uploader = document.querySelector(".mainuploader")
  var element_subs = document.querySelector(".mainsubs")
  var element_id = document.querySelector(".mainid")
  var element_date = document.querySelector(".maindate")
  element_title.textContent = title;
  element_uploader.textContent = uploader;
  element_views.textContent = views
  element_date.textContent = date;
  element_subs.textContent = subs;
  element_id.textContent = id;
  //Button functions
  document.getElementById("channel").onclick = function(){
    location.href = info.videoDetails.author.channel_url;
    
  }
  document.getElementById("video_").onclick = function(){
    location.href = info.videoDetails.video_url;
  }
  //Getting Playback url
  let link = _.chooseFormat(info.formats, {
    quality: "highestvideo",
    filter: "audioandvideo",
  }).url;
  //Set Playback url for <video></video>
  const player = document.querySelector(".player");
  player.src = link;
  }
}catch(err){
  document.getElementById("internet").style.display = "block"
    console.log("Fatal error occured")
}
}

function validate(str){
  return !str.trim().length
}

async function Show(){
    var element = document.getElementById("details")
    if(element.style.display === "block"){
        element.style.display = "none";
    }else{
        element.style.display = "block"
    }
}