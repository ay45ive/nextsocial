import AnimateIn from "@/components/AnimateIn";




export default function HomePage() {
  return (
    <div style={{ backgroundColor: 'bisque', fontFamily: 'sans-serif', textAlign: 'center'}}>
      
      <AnimateIn>
        <h2 style={{ backgroundColor: 'bisque', fontFamily: 'sans-serif', textAlign: 'center'}}>Welcome home!</h2>
      </AnimateIn>
    </div>
  )
}