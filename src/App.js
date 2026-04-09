import './App.css';
import Home from './pages/home';
import Loguser from './pages/log';
import Detailes from './pages/details';
import  Panier from './components/home/panier'
import  Footer from './components/home/footer'
import Rate from './pages/rate'
import Share from './pages/share' 
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Opinion from './pages/opinion';
import useLivres from './app/data/database';
import { useEffect } from 'react';
import { setLivres } from './app/redux/cardsSlice';
import Profile from './pages/profile';
import ProfileCard from './components/profile/profileCard';
import Favorites from './pages/favorites';
import History from './pages/History';
import Notifications from './pages/notifications';
import Account from './pages/Account';
function App() {
  const show = useSelector((state)=> state.loguser);
  const showrate = useSelector((state)=> state.detailescard)
  const dispatch = useDispatch();
  // const { livres } = useLivres();
  //   useEffect(() => {
  //       dispatch(setLivres(livres));
  //   }, [livres]);
  return (
    <BrowserRouter>  
        <div  style={{filter:show.show || showrate.showrate.showrate || (show.ok?false:showrate.showfavorite) || showrate.showopinion || showrate.showshare?'blur(5px)':''}}className="App">
          <Panier/> 
          <Routes>
            <Route path='/' element={<Home/> }/>
            <Route path='/detailes/:id' element={ <Detailes/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='/history' element={<History/>}/>
            <Route path='/notifications' element={<Notifications/>}/>
            <Route path='/account' element={<Account/>}/>
          </Routes>
          
          <Footer/>
          
       </div>
        <Opinion/>
        <Rate/> 
        <Share/>
        <Loguser/>
        <ProfileCard/>
       
    </BrowserRouter>
    
  );
}

export default App;
