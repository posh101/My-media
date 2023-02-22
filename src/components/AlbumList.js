import { useFetchAlbumsQuery, 
    useAddAlbumMutation } from "../store/apis/albumsApi";
import Skeleton from './skeleton';
import Button from './Button';
import AlbumsListItem from "./AlbumsListItem";


function AlbumList ({user}) {

   const {data, isLoading, error} = useFetchAlbumsQuery(user);
   const [addAlbum, results] = useAddAlbumMutation()

    
  

   const handleAddAlbum = () => {
   addAlbum(user)
   }

   let content;

   if(isLoading) {
    content = <Skeleton className="h-10 w-full" times={3}/>
   }

   else if (error) {
    content = <div>Error fetching albums</div>
   }

   else {
    content = data.map(album => {
    return    <AlbumsListItem key={album.id} album={album}/>
    })
   }

 

    return <div>
        <div className="m-2 flex flex-row item-center justify-between">
            <h3 className= "text-lg font-bold">Albums for {user.name}</h3>
        <Button loading={results.isLoading} onClick={handleAddAlbum}>
            + Add album
        </Button>
        </div>
        <div>{content}</div>
    </div>
}

export default AlbumList;