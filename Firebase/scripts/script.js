  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
          apiKey: "AIzaSyCAZGRSLpFP7h-6k6EL25h1w0jahFowtCs",
          authDomain: "colegio-dfa3a.firebaseapp.com",
          databaseURL: "https://colegio-dfa3a-default-rtdb.firebaseio.com",
          projectId: "colegio-dfa3a",
          storageBucket: "colegio-dfa3a.appspot.com",
          messagingSenderId: "15118194056",
          appId: "1:15118194056:web:9616ed8672b62a2667163d",
          measurementId: "G-338311GNR5"
      }
      // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  firebase.analytics()

  const TURMA = 'TurmaA'
  let dataBase = firebase.firestore()


  //       //pega todos os dados de uma coleção
  //   dataBase.collection("TurmaA").get()
  //       .then((snapshot) => {
  //           snapshot.forEach((doc) => {
  //               let aluno = doc.data()
  //               console.log(aluno.nome)
  //                   //console.log(doc.data())
  //                   //same thing above
  //           })
  //       })

  //para pegar um dado específico
  //é necessário pegar o identificador específico lá no firebase
  //   let docRef = dataBase.collection('TurmaA').doc('5DOLzQDksq2IIKNoE25H')

  //   docRef.get().then((doc) => {
  //       console.log(doc.data().nome)
  //   })


  //   dataBase.collection('TurmaA').where('nome', '==', 'Rafael').get()
  //       //quando se retorna um valor a arrow function pode ser passada sem parenteses
  //       .then(snapshot => {
  //           snapshot.forEach(doc => {
  //               let aluno = doc.data()
  //               console.log(aluno.nome, aluno.sobrenome)
  //           });
  //       })


  //adicionando algo ao firebase
  //   dataBase.collection(TURMA).add({
  //       nome: 'Jorge',
  //       sobrenome: 'Hardcore',
  //       notas: {
  //           nota1: 5,
  //           nota2: 6,
  //       },

  //   }).then((doc) => {
  //       console.log('Docmento inserido com sucessso:', doc)
  //   }).
  //   catch(erro => {
  //       console.log(erro)
  //   })

  //definindo o id

  //   dataBase.collection(TURMA).doc('AlunoNovo').set({
  //       nome: 'Amanda',
  //       sobrenome: 'Costa',
  //       notas: {
  //           nota1: 10,
  //           nota2: 9
  //       }
  //   }).then(() => {
  //       console.log('Adicionado com sucesso')
  //   }).catch(erro => {
  //       console.log(erro)
  //   })


  //pegando dados a cada mudança
  //Em tempo real
  //   dataBase.collection(TURMA).onSnapshot((snapshot) => {
  //       snapshot.forEach((doc) => {
  //           let aluno = doc.data()
  //           console.log(aluno)
  //               //console.log(doc.data())
  //               //same thing above
  //       })
  //   })

  //Apagando dados
  //   dataBase.collection(TURMA).doc('agAXtxJMpAaihHazlyPi').update({
  //       notas: firebase.firestore.FieldValue.delete()
  //   }).then(() => {
  //       console.log('Documento apagado com sucesso')
  //   }).catch(erro => {
  //       console.log(erro)
  //   })

  //Apagando um documento inteiro
  //doc será o id do que se quer apagar
  //   dataBase.collection(TURMA).doc('agAXtxJMpAaihHazlyPi').delete().then(() => {
  //       console.log('Documento apagado com sucesso')
  //   }).catch(erro => {
  //       console.log(erro)
  //   })




  //Criando um usuário com email e senha
  // function createUser(){

  //   let newUserEmail = 'emailteste@teste.com'
  //   let newUserPassword = '123adc'

  // let auth = firebase.auth()  

  //   auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword).then(
  //       user => {
  //           console.log(user)
  //       }
  //   ).catch((error) => {
  //       console.log(error)
  //   })
  // }

  let auth = firebase.auth()
      // para saber se há um usuário logado
      // let user = auth.currentUser
      //console.log(user)

  //para fazer login
  //   function login() {
  //       let userEmail = 'emailteste@teste.com'
  //       let userPassword = '123adc'

  //       auth.signInWithEmailAndPassword(userEmail, userPassword).then(loggedUser => {
  //               //para retornar o processo
  //               console.log(loggedUser)
  //                   //para acessar o usuário loggado
  //                   //console.log(auth.currentUser)
  //           }).catch(error => {
  //               console.log(error)
  //           })
  //           //let user = auth.currentUser
  //           //console.log(user)

  //   }
  //   login()

  //sempre que há uma alteração no estado do usuário ele essa função é disparada
  auth.onAuthStateChanged(user => {
      if (user) {
          console.log(user)
      } else {
          console.log("Ninguém logado!")
      }
  })

  //para fazer logout
  function logOut() {
      auth.signOut().then(
          () => {
              console.log('Usuário deslogado')
          }
      ).catch(erro => {
          console.log(erro)
      })
  }
  //   setTimeout(logOut, 2000)