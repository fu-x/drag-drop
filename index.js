
window.onload = function(){
  let imgList = this.document.getElementsByClassName("img-list")[0];
  let filesList = this.document.getElementsByClassName("files-list")[0];
  let imgLi;
  filesList.ondragstart = function(e){
    imgLi = e.target.parentNode;
  }
  
  imgList.ondragover = function(e){
    e.preventDefault();
  }

  imgList.ondrop = function(e){
    e.preventDefault();
    let files = e.dataTransfer.files;
    if(files.length !== 0){
      for(let i=0; i<files.length; i++){
        let fileReader = new FileReader();
        fileReader.onload = function(e){
          imgLi = document.createElement("li");
          let img = new Image();
          img.src = e.target.result;
          imgLi.appendChild(img);
          imgList.appendChild(imgLi);
        }
        fileReader.readAsDataURL(files[i])
      }
    }else{
      imgList.appendChild(imgLi);
    }
  }
}