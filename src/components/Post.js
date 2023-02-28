import { Link } from "react-router-dom";

//destructure the post from props
const Post = ({ post }) => {
  //////////////////
  // Style Objects
  //////////////////
  const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };
  console.log(post)
  return (
    <div style={div}>
      <Link to={`/post/${post.id}`}>
        <h1>{post.deck}</h1>
      </Link>
      <h2>{post.cards}</h2>
    </div>
  );
};

export default Post