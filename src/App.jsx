
import './App.css';
import UserDataForm from './forms/UserData';
import FileInputForm from './forms/FileInput';
function App() {
  return (
    <div className="App">
        <h1>User Data Form</h1>
        <UserDataForm/>
        <h1>File Input Form</h1>
        <FileInputForm/>
    </div>
  );
}

export default App;
