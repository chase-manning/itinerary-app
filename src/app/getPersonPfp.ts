import { PersonType } from "./itinerary";

import chasePfp from "../assets/pfps/chase.jpg";
import lienPfp from "../assets/pfps/lien.jpg";
import patrickPfp from "../assets/pfps/patrick.jpg";
import saskiaPfp from "../assets/pfps/saskia.jpg";
import taylorPfp from "../assets/pfps/taylor.jpg";
import kushlaPfp from "../assets/pfps/kushla.jpg";

const getPersonPfp = (person: PersonType) => {
  if (person === PersonType.Chase) return chasePfp;
  if (person === PersonType.Lien) return lienPfp;
  if (person === PersonType.Patrick) return patrickPfp;
  if (person === PersonType.Saskia) return saskiaPfp;
  if (person === PersonType.Taylor) return taylorPfp;
  if (person === PersonType.Kushla) return kushlaPfp;
  throw new Error("missing person pfp");
};

export default getPersonPfp;
