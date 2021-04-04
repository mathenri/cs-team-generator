fs = require('fs');

NAME_TRANSLATIONS = {
  'Jesper  "Suppe" Lodén': 'Suppe',
  'Jesper  "Sheppan" Scholander': 'Sheppan',
  'Jonathan "tRac3r" Rydström': 'Trac3r',
  'Jesper  "Magg0t" Andersson': 'Magg0t',
  'Erik "Mg0" Larm': 'Mg0',
  'Andre "Andreffsa" Svensson': 'Ankan',
  'Alexander "Zulleqvist" Zucconi': 'Zuccan',
  'Sebastian "Bigbe" Hjertberg': 'BigB',
  'Mathias "Limpan" Lindén': 'Limpan',
  'Johan "Widen" Widenberg': 'Widiz',
  'Simon "Oezt" Österman': 'Oezt',
  'Eric "Mouth" Raab-Obermayr': 'Mouth',
  'Johan "BoranHeaton" Kvarnemo': 'BoranHeaton',
  'Mattias "Märtha-Louise" Henriksson': 'Märta-Louise',
  'Mikael "Haimdall" Nelander': 'Heimdall',
  'Stefan  "Stroifanoff" Viberg': 'Steffe',
  'Christopher "Stoffah" Kristensen': 'Stoffah'
}

fs.readFile('ranks.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  let rankInput = data.replace(/,/g, ".")
  rankInput = rankInput.split('\n');
  rankDict = {}
  for (let row of rankInput) {
    const rowTokens = row.split(/\s+/)
    const rank = rowTokens[rowTokens.length-1]
    const name = rowTokens.slice(0, rowTokens.length-1).join(' ')
    rankDict[name] = rank
  }

  let output = []
  for (let [inputName, outputName] of Object.entries(NAME_TRANSLATIONS)) {
    inputName = inputName.replace(/\s+/g, " ")
    if (!(inputName in rankDict)) {
      console.log(`'ERROR! Could not find ${inputName} in translation dict. Output file will be invalid.'`)
    }
    const rank = rankDict[inputName]
    const base64rank = Buffer.from(rank).toString('base64')
    output.push(`"${outputName}": "${base64rank}",`)
  }
  console.log(output.join('\n'))
});