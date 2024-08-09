import 'bootstrap/dist/css/bootstrap.min.css';
import AddBootstrap from '@/AddBootstrap';
import './globals.css';

export const metadata = {
  title: 'Landing Page',
  description: 'A Next.js landing page with Bootstrap',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AddBootstrap/>
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Root Ranger</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/signin">SingIn/SignUp</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Read More</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {children}
        {/* Footer Section */}
        <footer className="bg-dark py-3 mt-auto">
          <div className="container text-center">
            <p className="mb-0" style={{color: 'white'}}>&copy; 2024 Root Ranger. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
