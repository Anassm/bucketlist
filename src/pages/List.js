import classes from "./List.module.css";
import Api from "../components/Api";

function List() {
  return (
    <div className={classes.list}>
      <h1>Lijst</h1>
      <p>
        Spicy jalapeno bacon ipsum dolor amet pork chop porchetta tongue short
        ribs hamburger, filet mignon pig leberkas picanha. Flank chuck biltong
        kielbasa, ham boudin rump pork frankfurter buffalo. Pork loin jowl shank
        cupim shankle bacon. Strip steak hamburger beef, drumstick porchetta
        beef ribs sausage bresaola fatback pastrami spare ribs pork loin bacon.
        Bresaola sausage corned beef leberkas jowl pork belly, biltong picanha
        short loin spare ribs. Turducken brisket ham picanha pork belly
        tenderloin. Alcatra prosciutto doner picanha meatloaf sirloin buffalo
        filet mignon chislic venison. Corned beef salami andouille pig spare
        ribs. Pancetta pork ham hock salami. Flank pork short loin salami. Ham
        leberkas cupim landjaeger. Does your lorem ipsum text long for something
        a little meatier? Give our generator a try… it’s tasty!
      </p>
      <h3 style={{ padding: "40px 0 0 0" }}>
        <Api />
      </h3>
    </div>
  );
}

export default List;
