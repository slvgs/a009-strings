const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "
console.log(`Antes ela tinha: ${minhaString.length} `)
console.log(`Sem os espaços ficou com: ${minhaString.trim().length}`)
const novastring = minhaString.replaceAll("________", "sticioso")
console.log(novastring)

