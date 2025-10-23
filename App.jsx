import React, { useState } from 'react'
import backgroundImage from './6a9aa26187c71038638480240b581fd1875afe7e.jpg'

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Dinner', time: 'Today at 8:00 PM', completed: false },
    { id: 2, text: 'Walk with Coby', time: 'Today at 3:30 PM', completed: false },
    { id: 3, text: 'Buy Groceries', time: 'Today at 10:00 AM', completed: false },
    { id: 4, text: 'Go to repair shop', time: 'Today at 9:00 AM', completed: false }
  ])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = () => {
    if (newTodo.trim()) {
      const newId = Math.max(...todos.map(t => t.id)) + 1
      setTodos([...todos, { 
        id: newId, 
        text: newTodo, 
        time: 'Today at 12:00 PM', 
        completed: false 
      }])
      setNewTodo('')
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Левый раздел – Название */}
      <div className="flex-1 flex items-center justify-center bg-gray-100 h-24 md:h-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-500 font-sans">Todo</h1>
      </div>
      
      {/* Правая часть — виджет «Задачи» */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden">
          {/* Заголовок с фоновым изображением */}
          <div 
            className="h-48 bg-gradient-to-br from-red-400 to-orange-400 relative bg-cover bg-center" 
            style={{backgroundImage: `url(${backgroundImage})`}}
          >
            <div className="absolute bottom-5 right-5 text-white text-right">
              <span className="block text-sm font-medium mb-1">Thur 9</span>
              <span className="block text-2xl font-bold">6:23 AM</span>
            </div>
          </div>
          
          {/* Todo виджета Body */}
          <div className="p-5">
            {/* Раздел ввода */}
            <div className="flex gap-2.5 mb-5">
              <input
                type="text"
                placeholder="Note"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl text-base bg-gray-50 outline-none transition-colors duration-200 focus:border-blue-500 focus:bg-white"
              />
              <button 
                onClick={addTodo} 
                className="w-10 h-10 border-none rounded-xl bg-green-500 text-white text-lg font-bold cursor-pointer transition-colors duration-200 flex items-center justify-center hover:bg-green-600"
              >
                +
              </button>
              <button className="w-10 h-10 border-none rounded-xl bg-green-500 text-white text-lg font-bold cursor-pointer transition-colors duration-200 flex items-center justify-center hover:bg-green-600">
                ↓
              </button>
            </div>
            
            {/* Todo List */}
            <div className="flex flex-col gap-4">
              {todos.map(todo => (
                <div key={todo.id} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-b-0">
                  <div className="flex-1">
                    <h3 className={`text-base font-semibold text-gray-800 mb-1 transition-all duration-200 ${
                      todo.completed ? 'line-through text-gray-400' : ''
                    }`}>
                      {todo.text}
                    </h3>
                    <p className="text-sm text-gray-600 font-normal">{todo.time}</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button 
                      onClick={() => toggleTodo(todo.id)}
                      className={`w-6 h-6 border-2 rounded-full cursor-pointer flex items-center justify-center text-sm text-white transition-all duration-200 hover:scale-110 ${
                        todo.completed 
                          ? 'bg-green-500 border-green-500' 
                          : 'border-green-500 bg-transparent'
                      }`}
                    >
                      {todo.completed && '✓'}
                    </button>
                    <button 
                      onClick={() => deleteTodo(todo.id)}
                      className="w-6 h-6 border-none bg-transparent cursor-pointer text-base flex items-center justify-center rounded transition-colors duration-200 hover:bg-red-50"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App