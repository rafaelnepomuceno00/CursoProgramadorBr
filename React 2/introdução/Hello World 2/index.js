const root = document.getElementById('root')

const t1 = React.createElement('h1', { id: 'Titulo Principal' }, 'Hello World!')
const t2 = React.createElement('h1', { id: 'Titulo Complementar' }, 'Subtitulo!')

const HeadLine = React.createElement('div', null, t1, t2)

ReactDOM.render(HeadLine, root)