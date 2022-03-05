function Laptop(Content){
return(
    <div>
            <center><img src={Content.image} alt="Lenovo Ideapad Flex 5 Core" width="150px" /></center>
            <h2>{Content.details}</h2>
            <h3>{Content.cost}</h3>   
    </div>
)
}
export default Laptop;