import { useState } from "react";


const ButtonEvenOdd = () => {
  const [Btn, setBtn] = useState();
  const [message,setMessage]=useState()

  const button = () => {
    const rseBtn = [];
    for (let i = 1; i <= 100; i++) {
      const result = (
      <button key={i} onClick={() => clickHandler(i)}>Button{i}</button>
      );
      rseBtn.push(result);
    }
    setBtn(rseBtn);
  };


 useState(() => {
    button();
  });

 const clickHandler = (i) => {
    if(i%2==0){
        setMessage("Current Selected Even")
    }
    else{
        setMessage("Current Selected Odd")
    }
  };



  return (
    <>
      <h1>{message}</h1>
      {Btn}
    </>
  );
};

export default ButtonEvenOdd;
