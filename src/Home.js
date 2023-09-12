
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    // let name = 'Mario'
    // const [name, setName] = useState('Luigi');
    // Luigi is the initial value. pass in the initial value. use the setName to change the name
    // array destructuring to grab the 2 values that useState hook returns.

    // const [age, setAge] = useState(10)

    // const handleClick = () => {
    //     setName('Mario');
    //     setAge(25)
    // }
    // const [blogs, setBlogs] = useState(null)
    // const [isPending, setIsPending] = useState(true)
    // const [error, setError] = useState(null)
    // const [name, setName] = useState('mario')
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs)
    // }

    // first only on the initial render -> empty array above
    const { data: blogs, isPending, error } = useFetch('http://localhost:3000/blogs')
    return (
        <div className='home'>
            {/* <p>{name} is {age} years old</p> */}
            {/* <button onClick={handleClick}>Click me</button> */}
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title='All blogs' />}
            {/* <BlogList blogs={blogs.filter((blog) =>blog.author === 'mario' )} title='Mario blogs' /> */}


        </div>
    );
}
// your using the map method loops through the array 
// if data changes at any point, react can keep track of those items using the key property 

export default Home;