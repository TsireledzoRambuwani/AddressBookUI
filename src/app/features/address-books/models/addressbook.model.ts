import { EntityState} from "@ngrx/entity";


export interface AddressBook{
    id:        string;
    firstname: string;
    surname:   string;
    about:     string;
    email:     string;
    website:   string;
    contacts:  string;
    imageUrl:  string;
}

export interface AddressBookModel extends EntityState<AddressBook>
{
    addressBook: AddressBook,
    addressBooks:AddressBook[],
    loading:boolean,
    error: string;
    
}