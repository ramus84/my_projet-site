import { Route, Routes } from 'react-router-dom';
import './App.css';
// import AdminTest from './components/AdminTest';
// import ClassClick from './components/ClassClick';
import DataFetchAll from './components/DataFetchAll';
// import DataFetchBlog from './components/DataFetchBlog';
import DataFetchTrajet from './components/Trajet/DataFetchTrajet';
// import DataFetchingOne from './components/DataFetchingOne';
// import Datafetchtest from './components/Datafetchtest';
import DataFetchTodos from './components/DataFetchTodos';
// import DataResultsReducer from './components/DataResultsReducer';
import DataTodosReducer from './components/DataTodosReducer';
// import Film from './components/Film';
import Formulaire from './components/Formulaire';
// import FunctionClick from './components/FunctionClick';
// import Inline from './components/Inline';
// import NameList from './components/NameList';
import NewTrajet from './components/Trajet/NewTrajet';
// import Newsletter from './components/Newsletter';
// import Stylesheets from './components/Stylesheets';
// import UtilisateurGreeting from './components/UtilisateurGreeting';
import Home from './components/Home/Home';
// import Services from './components/Services/Services';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
// import Developpement from './components/Services/Developpement/Developpement';
// import Marketing from './components/Services/Marketing/Marketing';
import Admin from './components/Admin/Admin';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import GestionTrajet from './components/Admin/GestionTrajet/GestionTrajet';
// import FetchOneTrajet from './components/Trajet/FetchOneTrajet/FetchOneTrajet';
// import FetchOneBlog from './components/FetchOneBlog/FetchOneBlog';
// import { Button } from './components/Button.style';
import UpdateTrajet from './components/Trajet/UpdateTrajet/UpdateTrajet';
import Connexion from './components/Utilisateur/Connexion/Connexion';
// import Greet from './components/Greet';
// import Hero from './components/Hero';
// import Message from './components/Message';
// import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Greet /> */}
      {/* <Welcome />  */}
{/* 
       <Greet name="Thomas" age= "30 ans">
        Thomas est super !
      </Greet>
      <Greet name="Toto" age= "90 ans" />
      <Greet name="John" age= "23 ans" /> */}

      {/* <Hero name="Bruce" hero="Batman" > */}
        {/* This is children props */}
      {/* </Hero> */}
      {/* <Hero name="Clark" hero="Superman" /> */}
      {/* <Hero name="Diane" hero="Wonder Woman" />  */}


          {/* ceci est un test ! */}
      {/* <Welcome name="Thomas" age="24 ans">  */}
      {/* </Welcome>  */}
      {/* <Welcome name="Titi" age="74 ans" /> */}
      {/* <Welcome name="Vincent" age="12 ans" />  */}

      {/* <Message /> */}

      {/* <Greet name="Thomas" age="24 ans" /> */}
      {/* <Greet name="Titi" age="68 ans" /> */}
      {/* <Greet name="Titi" age="68 ans"> */}
        {/* texte enfant  */}
      {/* </Greet>  */}

      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <UserGreeting />  */}

      {/* <AdminTest /> */}
       {/* <NameList />  */}
      {/* <Inline />  */}
      {/* <Stylesheets primary={false} /> */}
      
      <Formulaire />

      {/* <Newsletter /> */}
      {/* <DataFetchingOne />  */}
      {/* <Film /> */}

      <DataFetchAll /> 

      <DataFetchTodos />

      <DataTodosReducer />
       
      <NewTrajet />
      <DataFetchTrajet />
      {/* <DataFetchBlog /> */}

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        {/* <Route path='/services' element={<Services />} > */}
          {/* <Route path='/services/developpement' element={<Developpement />} /> */}
          {/* <Route path='/services/marketing' element={<Marketing />} /> */}
        {/* </Route> */}

        <Route path='/admin' element={<Admin />}>
          <Route path='/admin/dashboard' element={<Dashboard />} /> 
          <Route path='/admin/gestiontrajet' element={<GestionTrajet />} /> 
        </Route>
        <Route path='/profile/:id' element={<Profile />}/>
        
        <Route path='/alltrajets/' element={<DataFetchTrajet />} />
        {/* <Route path='/trajet/:id' element={<FetchOneTrajet />}/> */}
        <Route path='/updatetrajet' element={<UpdateTrajet />} />
        <Route path='/newtrajet' element={<NewTrajet />} />


        {/* <Route path='/allblogs' element={<DataFetchBlog />}/> */}
        {/* <Route path='/blog/:id' element={<FetchOneBlog />}/> */}

        <Route path='/connexion' element={<Connexion />}/>
        <Route path='/*' element={<NotFound />}/>
      </Routes>



    </div>
  );
}

export default App;
