import Pic from '../../assets/images/alogo.png';
import {SettingsIcon,
        ProfileImage,
        HeaderButton,
        HeaderContainer,
        FirstLine,SecondLine,
        State,Bio
    } from './header.styles';

function Header(){
    return(
        <div>
        <HeaderContainer>
                <ProfileImage src={Pic} alt="profile picture" className="profilePic" />
                <div className='infoContainer'>
                    <FirstLine>
                        <h1>alQaisi77</h1>
                        <HeaderButton>Edit Profile</HeaderButton>
                        <SettingsIcon/>
                    </FirstLine>
                    <SecondLine>
                        <p><span>20</span> posts</p>
                        <p><span>200</span> followers</p>
                        <p><span>123</span> following</p>
                    </SecondLine>
                    <div className="lastLine">
                        <p>
                            I'm <strong>Ahmad Alqaisi</strong>, I'm a Javascript developer.I have some experince
                            in using multiple tools such as Node.Js,Express.Js,psql,mongodb, and React.js {":)"}.
                        </p>
                    </div>
                </div>
        </HeaderContainer>
            <div className="mobile-items">
                    <Bio>
                        I'm <strong>Ahmad Alqaisi</strong>, I'm a Javascript developer.I have some experince
                        in using multiple tools such as Node.Js,Express.Js,psql,mongodb, and React.js .
                    </Bio>
                <State>
                    <p><span>20</span><br/> posts</p>
                    <p><span>200</span><br/> followers</p>
                    <p><span>123</span><br/> following</p>
                </State>
            </div>
        </div>
    );
}
export default Header;