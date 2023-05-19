import { Center, Container, MantineProvider } from "@mantine/core"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import { Header } from "./features/header/Header"
import { routes as appRoutes } from "./routes"

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ primaryColor: "orange" }}>
      <div className="App">
        <Router>
          <Header />
          <main>
            <Routes>
              {appRoutes.map((route) => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
              <Route 
                path="*" 
                element={
                  <Container my="xl" pt="lg">
                    <Center>Page not found.</Center>
                  </Container>
                }
              />
            </Routes>
          </main>
        </Router>
      </div>
    </MantineProvider>
  )
}

export default App
