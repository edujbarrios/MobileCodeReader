import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/python/python';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/python/python';
import 'codemirror/mode/php/php';
import 'codemirror/mode/ruby/ruby';
import 'codemirror/mode/go/go';
import 'codemirror/mode/swift/swift';
import 'codemirror/mode/rust/rust';
import 'codemirror/mode/sql/sql';
import 'codemirror/mode/perl/perl';
import 'codemirror/mode/r/r';
import 'codemirror/mode/shell/shell';
import 'codemirror/mode/powershell/powershell';
import 'codemirror/mode/scheme/scheme';
import 'codemirror/mode/yaml/yaml';
import 'codemirror/mode/vb/vb';
import 'codemirror/mode/vbscript/vbscript';
import 'codemirror/mode/verilog/verilog';
import 'codemirror/mode/vhdl/vhdl';
import 'codemirror/mode/vue/vue';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/htmlembedded/htmlembedded';
import 'codemirror/mode/julia/julia';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/markdown/markdown';
import './App.css';

function App() {
  const [codigo, setCodigo] = useState('');
  const [lenguaje, setLenguaje] = useState('javascript');

  const handleChange = (editor, data, value) => {
    setCodigo(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`El código en ${lenguaje} es:`, codigo);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="codigo">Introduce tu código:</label>
        <br />
        <CodeMirror
          value={codigo}
          options={{
            mode: lenguaje,
            theme: 'dracula',
            lineNumbers: true,
            keyMap: 'sublime',
          }}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="lenguaje">Selecciona el lenguaje:</label>
        <br />
        <select id="lenguaje" value={lenguaje} onChange={(e) => setLenguaje(e.target.value)}>
          <option value="javascript">JavaScript</option>
          <option value="htmlmixed">HTML</option>
          <option value="css">CSS</option>
          <option value="python">Python</option>
          <option value="clike">C++ / C</option>
        </select>
        <br />
        <br />
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
}

export default App;
