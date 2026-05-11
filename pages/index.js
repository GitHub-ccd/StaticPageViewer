export default function Home() {
  return (
    <main className="container">
      <h1>myBillAnalysis</h1>
      <p>A minimal single-page Next.js site exported as static files for GitHub Pages.</p>

      <section className="card">
        <h2>Overview</h2>
        <p>
          Replace this section with your dashboard, charts, or analyses.
        </p>
      </section>

      <section className="bouncing-container">
        <div className="ball ball-1"></div>
        <div className="ball ball-2"></div>
        <div className="ball ball-3"></div>
        <div className="ball ball-4"></div>
        <div className="ball ball-5"></div>
      </section>

      <footer>
        <small>Built with Next.js • myBillAnalysis</small>
      </footer>
    </main>
  )
}