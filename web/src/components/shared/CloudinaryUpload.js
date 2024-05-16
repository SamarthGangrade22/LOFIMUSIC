import { openUploadWidget } from "../../utils/CloudinaryService";

const CloudinaryUpload = ({setUrl,setName}) => {
  const uploadImageWidget = () => {
    let myUploadWidget = openUploadWidget(
      {
        cloudName: "dw0trggex",
        uploadPreset: "Spotify",
        
        sources: ["local"],
      },
      function (error, result) {
        if (!error && result.event === "success") {
          setUrl(result.info.secure_url);
          setName(result.info.original_filename);
        }
        else{
           if(error){
            console.log(error);
           }
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <button className="bg-white text-black rounded-full py-2 px-4 font-semibold" onClick={uploadImageWidget}>
      Select Track
    </button>
  );
};

export default CloudinaryUpload;
