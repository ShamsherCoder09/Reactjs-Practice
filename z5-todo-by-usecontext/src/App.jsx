
import './App.css'
import FormTodo from './components/FormTodo'
import Todos from './components/Todos';
import TodosProvider from './context/TodosProvider';






function App() {
 
  return (
    <TodosProvider>
       <FormTodo  />
      <Todos/>
    </TodosProvider>
  )
}

export default App
