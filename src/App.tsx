import constructionImage from './assets/onDev.jpg'

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Hi, I'm</h1>
      <img
        src={constructionImage}
        alt="Under Construction Page"
        style={{ width: '50%', objectFit: 'cover' }}
      />
    </div>
  )
}

export default App
