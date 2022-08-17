import Banner from "../../components/Banner";
import Dropdown from "../../components/Dropdown";
import bannerApropos from "../../assets/banner_aPropos.png";
import styled from "styled-components";

const Section = styled.section`
  @media all {
    margin-top: 31px;
  }

  @media (max-width: 400px) {
    margin-top: 19px;
  }
`;

/** Création de la page A propos
 * @return {JSX.Element}
 */
function APropos() {
  const sectionApropos = [
    {
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: "Responsabilité ",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <main>
      <Banner image={bannerApropos} type="APropos" />
      <Section>
        {sectionApropos.map(({ title, content }) => (
          <Dropdown
            key={`${title}`}
            type="Paragraphe"
            titre={title}
            content={content}
            page="Apropos"
          />
        ))}
      </Section>
    </main>
  );
}

export default APropos;
