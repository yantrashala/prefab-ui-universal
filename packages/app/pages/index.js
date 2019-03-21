import Header from '../components/Header';
import Banner from '../components/Banner';
import BillBoard from '../components/Billboard';
import { Reaction } from 'mobx';

const Index = () => (
  <React.Fragment>
    <Header />
    <h1> Welcome to Test</h1>
    <Banner />
    <BillBoard />
  </React.Fragment>
);

export default Index;
