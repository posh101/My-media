import { useEffect } from "react";
import {  useSelector } from "react-redux";
import { fetchUsers, addUsers} from "../store";
import Skeleton from "./skeleton";
import Button from './Button'
import { UseThunk } from "../hooks/use-thunk";
import UsersListItem from "./usersListItem";

function UsersList() {

    
    
    const [doFetchUsers, isLoadingUser, isLoadingUserError] = UseThunk(fetchUsers)
    const [doCreateUser, isCreatingUser, isCreatingUserError] = UseThunk(addUsers)
   

    const { data } = useSelector((state) => {
      return state.users;
    }) 

    useEffect(() => {
      doFetchUsers()
    }, [doFetchUsers]);

    const handleUsersAdd = () => {
        doCreateUser();
    }

    let content;

    if(isLoadingUser) {
     content = <Skeleton times={6} className="h-10 w-full"/>
    }

    else if(isLoadingUserError) {
       content = <div>Error fetching data...</div>
    }

    else {
        content = data.map((user) => {

        return <UsersListItem key={user.id} user={user} />
        })
    
    }

    
    return (
        <div>
            <div className="flex flex-row justify-between items-center m-3">
                <h1 className="m-2 text-xl">Users</h1>
               
            <Button loading={isCreatingUser} onClick={handleUsersAdd}>
                + Add Users
                </Button>
                {isCreatingUserError && 'Error creating user...'}
                
                
            </div>
            {content}
        </div>
    )
}

export default UsersList;