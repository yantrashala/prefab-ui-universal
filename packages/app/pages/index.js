import Header from '../components/Header';
import Banner from '../components/Banner';
import BillBoard from '../components/Billboard';
import { Reaction } from 'mobx';
import Button from 'atomic-components/src/button';

const Index = () => (
  <React.Fragment>
    <Header />
    <h1> Welcome to Fab - Universal </h1>
    {/* <Button>Atomic Button</Button>  */}
    <Banner />
    <BillBoard />
  </React.Fragment>
);

export default Index;
