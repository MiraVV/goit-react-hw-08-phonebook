// import { Navigate } from 'react-router-dom';
import Contacts from 'components/Contacts/Contacts';
// import useAuth from '../../shared/hooks/useAuth';

const MyContactsPage = () => {
  // const isLogin = useAuth();

  // if (!isLogin) {
  //   return <Navigate to="/login" />;
  // }
  return (
    <div>
      {/* <h1>My contacts page</h1> */}
      <Contacts />
    </div>
  );
};

export default MyContactsPage;
