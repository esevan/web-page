import './App.css';
import Content from './components/Content.js';
import {Grid} from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Grid>
        <Grid.Row>
            <Content />
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
