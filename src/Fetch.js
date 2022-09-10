// function Fetch() 
// {
//   const UrL = ("http://localhost:8004/docs")

// function Fetch() {
//     // const [error, setError] = useState(null);
//     // const [isLoaded, setIsLoaded] = useState(false);
//     // const [docs, setItems] = useState([]);
//     const [question, setQuestion] = useState("Hello how are you there, how can I help you?");
//     // const [data, setData] = useState ("")

//     // useEffect(() => {
//     //     fetch(UrL)
//     //       .then(res => res.json())
//     //       .then(
//     //         (result) => {
//     //           setIsLoaded(true);
//     //           setItems(result);
//     //         },
           
//     //         (error) => {
//     //           setIsLoaded(true);
//     //           setError(error);
//     //         }
//     //       )
//     //   }, [])
//   function handleSubmit{
//     setQuestion(e.target.value)
//   }
    
//       if (error) {
//         return <div>Error: {error.message}</div>;
//       } else if (!isLoaded) {
//         return <div>Loading...</div>;
//       } else {

//         const handleSubmit = (e) => {
//           e.preventDefault();
//           fetch(UrL, {
//              method: 'POST',
//              body: JSON.stringify({
//                 info: info,
//                 data: data
               
                
//              }),
//              headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//                 'Accept': 'application/json'
//              },
//           })
//              .then((res) => res.text())
//              .then((doc) => {
//                 setItems((docs) => [doc, ...docs]);
//                 setDocs("");
//                 setData("");
//              })
//              .catch((err) => {
//               console.log(err.message);
//            });
//        };
//   return (
   
//   );
// }

// export default Fetch;