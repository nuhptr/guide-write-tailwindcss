import Button from "./components/Button";

function App() {
   return (
      <div className='flex gap-6 items-center justify-center min-h-screen'>
         <Button text='Click Me' />
         <Button text='Danger' color='danger' size='small' />
      </div>
   );
}

export default App;
