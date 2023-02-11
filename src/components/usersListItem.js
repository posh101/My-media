import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUsers } from "../store";
import  {UseThunk} from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";

function usersListItem ({user}) {

    const [doRemoveUser, isLoading, error] = UseThunk(removeUsers)

    const handleClick = () => {
        doRemoveUser(user)
    }

    const header = <>

<Button className="mr-3" onClick={handleClick} loading={isLoading}>
            <GoTrashcan />
        </Button>
         {error && 'Error Deleting user...'}
        {user.name}
    </>

    return (
       <ExpandablePanel header={header}>
        <AlbumList user={user}/>
       </ExpandablePanel>
    );
}

export default usersListItem;