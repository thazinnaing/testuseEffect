export const Person=(props)=>{
    console.log(props)
    return(
        <>
        <h1>Name: {props.name}</h1>
        <h2>Last name: {props.lname}</h2>
        <h2>age: {props.age}</h2>
        </>
    )
    
}