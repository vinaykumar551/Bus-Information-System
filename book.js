const Bookstore=()=>{
    return (
        <>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        </>
    )
};

const Book=()=>{
    return (
        <>
        <Title></Title>
        <Author></Author>
        <Image></Image>
        </>
    )

};
const Title=()=>{
    return <h1>Book Title</h1>;
};
const Author=()=>{
    return <h3>Author</h3>;
};
const Image=()=>
{
    return <h5>Image placeholger</h5>;
};

export default Bookstore;