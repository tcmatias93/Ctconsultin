import { Img } from "@chakra-ui/react";
export default function Banner() {
  return (
    <>
      <section className="u-section-1 u-align-center">
        <Img
          className="u-image-1 u-expanded-width u-image "
          src="/images/HeadCTConsultoria.png"
          alt="Banenr de la empresa"
        />
        <h1 className="u-text-1">Bienvenidos a CTConsultoria</h1>
        <p className="u-text-1 u-text-2">
          Nosotros administramos tu negocio, <br /> tú te encargas de trabajar
          para hacerlo grande
        </p>
      </section>
    </>
  );
}
