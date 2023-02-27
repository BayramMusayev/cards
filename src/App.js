import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Ccsharp from "./images/ccsharp.png";
import Kompleweb from "./images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Course</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Amgular"
                description="Lorem ipsum dolor sit amet consectetur adipisicing 
       elit.Dolorem harum facere pariatur eum veritatis recusandae
        voluptas voluptatem nam aspernatur possimus ea temporibus, 
        similique iure veniam consectetur sed alias, provident sint."
              />
            </div>
            <div className="column">
              <Course
                image={Bootstrap}
                title="Bootstrap 5"
                description="Lorem ipsum dolor sit amet consectetur adipisicing 
       elit.Dolorem harum facere pariatur eum veritatis recusandae
        voluptas voluptatem nam aspernatur possimus ea temporibus, 
        similique iure veniam consectetur sed alias, provident sint."
              />
            </div>
            <div className="column">
              <Course
                image={Ccsharp}
                title="Komple Web"
                description="Lorem ipsum dolor sit amet consectetur adipisicing 
       elit.Dolorem harum facere pariatur eum veritatis recusandae
        voluptas voluptatem nam aspernatur possimus ea temporibus, 
        similique iure veniam consectetur sed alias, provident sint."
              />
            </div>
            <div className="column">
              <Course
                image={Kompleweb}
                title="Frontend"
                description="Lorem ipsum dolor sit amet consectetur adipisicing 
       elit.Dolorem harum facere pariatur eum veritatis recusandae
        voluptas voluptatem nam aspernatur possimus ea temporibus, 
        similique iure veniam consectetur sed alias, provident sint."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
