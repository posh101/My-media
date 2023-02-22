import { useRemovePhotoMutation } from "../store";
import { GoTrashcan } from "react-icons/go";

function PhotosListItem ({photo}) {
    const [removePhoto] = useRemovePhotoMutation()

    const handleRemovePhoto = () => {
        removePhoto(photo);
    }
    return <div className="relative m-2 cursor-pointer" onClick={handleRemovePhoto}>
        <img className="h-20 w-20" src ={photo.url}
        alt="random photos"/>
        <div className=" inset-0 absolute flex items-center justify-center
        hover:bg-gray-200 opacity-0 hover:opacity-80"> 
        <GoTrashcan />
        </div>
    </div>
}

export default PhotosListItem;