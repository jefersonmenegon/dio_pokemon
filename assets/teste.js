// const lista = [{nome: 'Nome A'}, {nome: 'Nome B'}, {nome: 'SobreNome A'}, {nome: 'SobreNome B'}]

// console.log(lista.map(e => e.nome)
//             .filter((e) => e.startsWith('N'))
//             .join('; '))


// console.log(lista.filter((e) => e.nome.startsWith('N'))
//         .map(e => `<li>${e.nome}</li> `)
//         .join('')
// )
  

const promessaDeUmNumeroQualquer = new Promise((resolve, reject) => {
        setTimeout(() => {
               const numero = parseInt(Math.random() * 17) 
               resolve(numero)
        }, 1000);
})

console.log('Iniciou')

promessaDeUmNumeroQualquer
   .then((value) => {
        console.log(value)
   })
   .catch((error) => {
        console.error(error)
   })
   .finally(() => {
        console.log('Finalizou a promise')
   })

console.log('finalizou')