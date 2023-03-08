import About from "./components/About/About"
import Autoparts from "./components/Autoparts/Autoparts"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hits from "./components/Hits/Hits"
import Image from "./components/Image/Image"
import Input from "./components/Input/Input"
import News from "./components/News/News"
import PopCategories from "./components/PopCategories/PopCategories"
import Text from "./components/Text/Text"

const App = () => (
    <div className="App">
        <Header/>
        <PopCategories/>
        <News/>
        <Image className="mb-[60px]"/>
        <Autoparts/>
        <Hits/>
        <Image className="mb-[60px]"/>
        <About/>
        <Text/>
        <Input/>
        <Footer/>
    </div>
);
export default App
