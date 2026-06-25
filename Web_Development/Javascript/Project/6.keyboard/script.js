const table = document.createElement('div')

window.addEventListener('keydown',(e)=>{
    table.innerHTML = `<table>
    <tr>
        <th>Key</th>
        <th>Keycode</th>
        <th>Code</th>
    </tr>
    <tr>
        <td>${e.key === ' '? 'space':e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
  </tr>
</table>`

document.body.appendChild(table)
})

