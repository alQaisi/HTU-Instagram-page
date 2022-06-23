import Gallery from '../gallery/gallery.component'
import Header from "../../components/header/header.component";
import {PageContainer} from './userPage.styles';

function UserPage(){
    return(
        <PageContainer>
            <Header/>
            <Gallery/>
        </PageContainer>
    );
}
export default UserPage;