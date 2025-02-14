import Button, { RestartLg, SquareYellowPreveBtn } from '../../ui/Button/Button';
import { SquareNextBtn, SquarePreveBtn } from '../../ui/Button/SlideButton';
import AccountProfile from '../../ui/icon/AccountProfile';
import AccountCs from '../../ui/icon/AccountCs';
import AccountMembership from '../../ui/icon/AccountMembership';
import AccountMy from '../../ui/icon/AccountMy';
import ProfileImage from '../../ui/icon/ProfileImage';
import ProfileModal from '../../components/account/ProfileModal';
import ProfileEdit from '../../components/account/ProfileEdit';

const DramaPage = () => {
    return (
        <div>
            드라마
            <Button title='버튼' />
            <RestartLg />z
            <SquarePreveBtn />
            <SquareNextBtn />
            <SquareYellowPreveBtn />
            <AccountProfile />
            <AccountCs />
            <AccountMembership />
            {/* <AccountMy /> */}
            <AccountMy />
            <ProfileImage />
            <ProfileModal />
            <img src="./images/default_profile.png" alt="이미지" />
            <ProfileEdit />
        </div>
    );
};

export default DramaPage;
