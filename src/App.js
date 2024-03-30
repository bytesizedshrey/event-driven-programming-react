export default function App(){
// const handelClick = () => {
//   console.log('clicked');
// }

  return (
    <MyButton onClick={handleClick}>Click Me</MyButton>
  );
}

function handleClick(event){
  console.log(event);
};


function MyButton(props){
  return (
    <button 
    {...props}
    style={{
      color:'red'
    }} />
  )
}