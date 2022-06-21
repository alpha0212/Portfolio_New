import NavBar from "./NavBar";
import Contents from '../components/Contents';
import MainContainer from '../components/MainContainer';

export default function Layout({ children }) {
  return (
    <>
      
      <NavBar />
      <MainContainer />
      <div>{children}</div>
    </>
  );
}
