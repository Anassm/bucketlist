import classes from "./Home.module.css";

function Home() {
  return (
    <div className={classes.home}>
      <h1>Welkom</h1>
      <p>
        Deze website behoord bij een school-project, het doel is om via een API
        de data van de server in de front-end aan te tonen. De front-end is
        gemaakt in een Javascript library, React. De backend is gemaakt met
        Laravel, een PHP framework.
        <br /><br />
        Het gaat om een bucketlist, de gebruiker kan zijn of haar items van de
        bucketlist toevoegen in de back-end, die data wordt via een Application
        programming interface (API), in deze website aangetoont.
      </p>
    </div>
  );
}

export default Home;
