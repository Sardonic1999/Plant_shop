import React from "react";
import { Wrapper, Left, Right, Section } from "./Footer_Style";

const Footer = () => {
  return (
    <Wrapper>
      <Left>
        <h2>plantku</h2>
        <h4>Plantku House</h4>
        <p>
          Jl. Laksda Adisucipto No.51, Demangan, Kec. <br /> Depok, Kota
          Yogyakarta, Daerah Istimewa <br /> Yogyakarta 55282
        </p>
      </Left>
      <Right>
        <Section>
          <h4>Perusahaan</h4>
          <p>Tentang Kami</p>
          <p>Hubungi Kami</p>
        </Section>
        <Section>
          <h4>Produk</h4>
          <p>Tanaman</p>
          <p>Tanaman Lain</p>
        </Section>
        <Section>
          <h4>Berlangganan Email Kami</h4>
          <input placeholder="Masukan Alamat Email" type="text" />
          <br />
          <button>Submit</button>
        </Section>
      </Right>
    </Wrapper>
  );
};

export default Footer;
