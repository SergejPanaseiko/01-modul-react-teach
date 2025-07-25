import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Message from "./components/Message/Message";
import Section from "./components/Section/Section";
import SectionThree from "./components/SectionThree/SectionThree";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import Test from "./components/Test/Test";

const App = () => {
  
  return(
  <div>
      <Header />  
      <Section />
      <Footer />
      <Message author="Vilgelm" text="Продам праску!"/>
      <Test />
      <SectionTwo varianta="TransAuto" vary1={false} />
      <SectionThree method={155} />
  </div>
  )
};
export default App;