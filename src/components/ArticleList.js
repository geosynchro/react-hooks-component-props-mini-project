import Article from "./Article"

function ArticleList(props){
    const postsArr = props.posts.map((post) => {
    return(<Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/>
    )})
    return(
        <main>
            {postsArr}
        </main>
    )
}

export default ArticleList