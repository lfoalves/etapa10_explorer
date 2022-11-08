import { Container } from "./styles";

import { Tag } from "../Tag";
import { Star } from "../Star";
import { StarEmpty } from "../StarEmpty";

export function MovieNote({ data, ...rest }) {
  return(
    <Container {...rest}>
      <h1>{data.title}</h1>
      <div>
        { data.rating  && data.rating == 1 ? <><Star /> <StarEmpty /> <StarEmpty /> <StarEmpty /> <StarEmpty /></> : '' }
        { data.rating  && data.rating == 2 ? <><Star /> <Star /> <StarEmpty /> <StarEmpty /> <StarEmpty /></> : '' }
        { data.rating  && data.rating == 3 ? <><Star /> <Star /> <Star /> <StarEmpty /> <StarEmpty /></> : '' }
        { data.rating  && data.rating == 4 ? <><Star /> <Star /> <Star /> <Star /> <StarEmpty /></> : '' }
        { data.rating  && data.rating == 5 ? <><Star /> <Star /> <Star /> <Star /> <Star /></> : '' }
      </div>
      <p>{data.description}</p>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }

    </Container>
  );
}