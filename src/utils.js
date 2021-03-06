module.exports.showDataWithDisplay = (data, display) => {
  if (display.toLowerCase() === 'table') {
    const Table = require('cli-table')

    const table = new Table({
      head: Object.keys(data)
    })

    table.push(Object.values(data))

    console.log(table.toString())
  } else {
    console.log(JSON.stringify(data, null, 2))
  }
}
