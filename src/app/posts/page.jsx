
import PostForm from "@/components/PostForm";
import UserForm from "@/components/UserForm";
import { db } from "@/lib/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { Suspense } from "react"; 




export default async function PostsPage() {
  const { userId } = await auth();

  const responsePosts = await db.query(`
    SELECT
      posts.id,
      posts.content,
      users.username,
      users.id as user_id
    FROM posts
    JOIN users ON posts.clerk_id = users.clerk_id`);
  const posts = responsePosts.rows;

  const responseUser = await db.query(
    `SELECT * FROM users WHERE clerk_id = '${userId}'`
  );
  const numUsers = responseUser.rowCount;

  return (
    <div>
      <AnimateIn>
        <h2 style={{color: "beige"}}>Posts</h2>
      </AnimateIn>
      <SignedIn>{numUsers === 1 ? <PostForm /> : <UserForm />}</SignedIn>

      <SignedOut>
        <Link href="/sign-in">Please sign in to make a post</Link>
      </SignedOut>
      
      
      <p>Feel free to speak your mind!</p>
      
      {posts.map((post) => {
        return (
        <Suspense key={post.id} fallback={<p>Loading feed...</p>}>
        
          <div >
            <h3>
              <Link href={`/user/${post.user_id}`}>{post.username}</Link> says
            </h3>
            <p>{post.content}</p>
          
          </div>
        </Suspense>
        );
      })}
    </div>
  );
}