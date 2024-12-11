import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";



export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body style={{backgroundColor: 'bisque'}}>
          <h1 style={{backgroundColor: 'burlywood', color: 'bisque'}}>45 Social</h1>
          <ul style={{height: '20vh', width: '20vw', display: 'flex'}}>
          <Image alt="logo" width="100" height="100" src="/45.png.webp"/>
          </ul>
          <nav style={{backgroundColor: 'bisque', alignItems: 'center', alignContent: 'center'}}>
            <button style={{color: 'primary', variant: 'faded' ,backgroundColor: 'burlywood', fontFamily: 'serif', fontSize: '18px'}}>
              <Link href="/">Home</Link>
            </button>
            <button style={{backgroundColor: 'burlywood', fontFamily: 'Franklin Gothic Medium', fontSize: '18px'}}>
              <Link href="/posts">Posts</Link>
            </button>
            <button style={{backgroundColor: 'burlywood', fontFamily: 'Franklin Gothic Medium', fontSize: '18px'}}>
              <Link href="/user">User</Link>
            </button>
          </nav>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}