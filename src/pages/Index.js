import Post from "../components/Post";
import {useLoaderData} from "react-router-dom"

const Index = (props) => {
  const decks = useLoaderData()
  // For each post in the array render a Post component
  return decks.map((post) => <Post post={post} key={post.id} />);
    
};

export default Index;;