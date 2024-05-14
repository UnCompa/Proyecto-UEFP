import Dropzone from "dropzone";
import {v4 as uuid} from 'uuid'
  let myDropzone = new Dropzone(".dropzone", {
    url: "/"
  })
  myDropzone.on("addedfile", file => {
    (file);
    const fileNameParce = file.name.replace(/\.(mp4|mp3|jpg|png)$/, "")
    const fileName = `${fileNameParce}-${uuid()}`
    (fileName);
  })