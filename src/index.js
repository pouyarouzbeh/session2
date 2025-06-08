import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// function Children({name , age}) {
//   return(
//     <div>
//     <h2>نام : {name}</h2>
//     <h3>سن: {age}</h3>
//     {/* <h1>جنسیت : {props.gender}</h1> */}
//     <br></br>
//     </div>
//   )
// }

// function Button1(props){
//   return(
//     <button>{props.name}</button>
//   );
// }



// function Parrent() {
//   return (
//     <div>
//       <Children name="علی" age="17" gender="مرد" />
//       <Children name="زهرا" age="20" gender="زن" />
//       <Button1 name="ورود"/>
//       <Button1 name="خروج"/>
//     </div>
//   );
// }

// function Car(props) {
//   return <h2>I have {props.options.length} cars!</h2>;
// }

// function Garage({cars}) {
//   // const carInfo = { name: "Ford", model: "Mustang" };
//   const cars2 = ['Ford', 'BMW', 'Audi'];
//   return (
//     <>
// 	    <h1>Who lives in my garage?</h1>
// 	    <Car options={ cars2 }/>
//     </>
//   );
// }

// function Cars1(){
//   const cars = ['Ford', 'BMW', 'Audi'];
//   return(
//     <Garage cars={cars}/>
//   )
// }




// function Garage(props) {
//   const cars = props.cars;
//   return (
//     <>
//       <h1>Garage</h1>
//       {cars.length > 0 &&
//         <h2>
//           You have {cars.length} cars in your garage.
//         </h2>
//       }
//     </>
//   );
// }

// function Test(){
//   const items = [1,2,3,4,5];
//   const double = items.map(n => n*2);
//   const filtered = items.filter(n => n%2 === 0);
//   console.log(double);
//   console.log(filtered);
// }


// function Cars(props){
//   return <li>{props.name}</li>
// }


// function Garage(){
//   const cars = ["bmw" , "samand" , "benz"];
//   return(
//     <>
//       <ul>
//         {cars.map((car) => <Cars name ={car}/>)}
//       </ul>
//     </>
//   );
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
