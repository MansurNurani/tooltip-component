import './App.css';
import TooltipComponent from './Component/TooltipComponent';

function App() {
  return (
    <div>
      <br />
      <br />
      <br />
      <div class="MainDiv">
        <TooltipComponent TooltipText="سبز" />
        <TooltipComponent TooltipText="قرمز" />
      </div>
      <br />
      <br />
      <div class="MainDiv">
        <TooltipComponent TooltipText="آبی" />
        <TooltipComponent TooltipText="سفید" />
      </div>
    </div>
  );
}

export default App;
