import React from "react";
import FootPart from "./FootPart";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { SlSocialYoutube } from "react-icons/sl";
import { BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import ULli from "./ULli";

const Footer = () => {
  return (
    <div className=" px-14">
      <div className="">
        <div>
          <h1 className=" font-semibold mb-[10px] text-[22px] text-xl text-[#282828]">
            BUY SPIRITUAL ITEMS ONLINE AT SANSKAR
          </h1>
          <p className="font-serif">
            Every prayer ritual in Hinduism should be performed exactly as the
            sacred writings say. A place of worship in your house or mandir has
            to reflect all the spirituality for you to be able to pay tribute to
            the Gods and the Goddesses properly. For this to happen, Vedic Vaani
            offers an astonishing variety of prayer vessels, cloth, beads,
            sculptures, and a myriad of other{" "}
            <strong className="font-bold cursor-pointer hover:text-blue-400">
              Pooja accessories online
            </strong>
            . Our store opens its doors to everyone willing to get a divine
            blessing for well-being and good fortune.
          </p>
          <br />
          <p className="font-serif">
            Vedic Vaani is an all-in-one source of Puja items, Holy Books,
            statues, and{" "}
            <strong className="font-bold cursor-pointer hover:text-blue-400">
              Hindu idols for sale
            </strong>
            . If you want to make a spiritual ritual to honor a special guest,
            celebrate a wedding day, or mark any other remarkable event while
            worshiping the Gods with all your heart, we know what will be the
            very thing. Whether it’s for Puja or Yagna, you will find everything
            you need in our catalog. From Rudraksha, Yantras to Shaligrams and
            gemstones – our range includes all items required for ritual
            practices. Even if you are looking for a Ganesh, Shiva or{" "}
            <strong className="font-bold cursor-pointer hover:text-blue-400">
              Buddha statue, buy it online
            </strong>{" "}
            at Vedic Vaani in a few clicks.{" "}
          </p>
          <br />
          <p className="font-serif">
            {" "}
            To create favorable conditions for worship at your place, it’s up to
            you to opt for Agarbatti or Dhoops. These aromatic sticks allow you
            to offer the most pleasant incense to various deities. At our store,
            they are available in many forms and fragrances.
          </p>
          <br />
        </div>
        <div>
          <h2 className=" font-semibold mb-[10px] text-[20px] text-xl text-[#282828]">
            WE GUARANTEE THE HIGHEST QUALITY
          </h2>
          <p className="font-serif">
            Vedic Vaani enables you to direct the flow of positive energy to
            your household with{" "}
            <strong className="font-bold cursor-pointer hover:text-blue-400">
              Puja items at wholesale
            </strong>{" "}
            prices. Every product available in our catalog is 100% authentic and
            made with your spiritual needs in mind. Here you will also come
            across many skillfully handcrafted idols, statues, and accessories.
            When shopping with us, you can not only{" "}
            <strong className="font-bold cursor-pointer hover:text-blue-400">
              buy spiritual items online
            </strong>{" "}
            but get gifts with your order. Take a look at our range of products
            and perform your Puja right!
          </p>
          <br />
        </div>
        <div>
          <h3 className="font-semibold text-[18px] text-xl">
            MOST SEARCHED FOR ON OUR STORE
          </h3>
          <div
            className="widget block block-static-block"
            style={{ textAlign: "justify" }}
          >
            <div className="item-list">
              <a title="Puja Items & Services" className="cursor-pointer">
                Puja Items & Services
              </a>{" "}
              &nbsp;
              <a title="Puja items">Puja items</a>&nbsp;
              <a title="Puja kits">Puja kits</a>&nbsp;
              <a title="Puja Essentials">Puja Essentials</a>&nbsp;
              <a title="Rangoli">Rangoli</a>&nbsp;
              <a title="Sacred threads"></a>&nbsp;
              <a title="Rakhi Thread">Rakhi Thread</a>&nbsp;
              <a title="Diyas">Diyas</a>&nbsp;
              <a title="Essential Oils">Essential Oils</a>&nbsp;
              <a title="Navgraha Shanti Packs">Navgraha Shanti Packs</a>&nbsp;
              <a title="Puja Coins and Frames">Puja Coins and Frames</a>&nbsp;
              <a title="Attar">Attar</a>&nbsp;
              <a title="Kumkum, Sindoor, Sandal Tilaks & Paste">
                Kumkum, Sindoor, Sandal Tilaks & Paste
              </a>
              &nbsp;
              <a title="Havan items">Havan items</a>&nbsp;
              <a title="Natural Floral water">Natural Floral water</a>&nbsp;
              <a title="Holy water">Holy water</a>&nbsp;
              <a title="Deity Garlands">Deity Garlands</a>&nbsp;
              <a title="Shagun Envelopes">Shagun Envelopes</a>&nbsp;
              <a title="Dhoop / Camphor">Dhoop / Camphor</a>&nbsp;
              <a title="Cotton Wicks">Cotton Wicks</a>&nbsp;
              <a title="Rare items">Rare items</a>&nbsp;
              <a title="Prayer Vessels">Prayer Vessels</a>&nbsp;
              <a title="Abhishek Items">Abhishek Items</a>&nbsp;
              <a title="Havan Kund & Sticks">Havan Kund & Sticks</a>&nbsp;
              <a title="Diyas / Lamps">Diyas / Lamps</a>&nbsp;
              <a title="Deity Thrones">Deity Thrones</a>&nbsp;
              <a title="Puja Thalis">Puja Thalis</a>&nbsp;
              <a title="Panchapatra & Glass">Panchapatra & Glass</a>&nbsp;
              <a title="Puja Plates & Bowls">Puja Plates & Bowls</a>&nbsp;
              <a title="Netipatra">Netipatra</a>&nbsp;
              <a title="Incense stands">Incense stands</a>&nbsp;
              <a title="Bells, Damrus">Bells, Damrus</a>&nbsp;
              <a title="Kalash / Pots">Kalash / Pots</a>&nbsp;
              <a title="Haldi Kumkum Containers">Haldi Kumkum Containers</a>
              &nbsp;
              <a title="Flower containers">Flower containers</a>&nbsp;
              <a title="Mata Ka Chatar, Crowns">Mata Ka Chatar, Crowns</a>&nbsp;
              <div className="widget block block-static-block">&nbsp;</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#fff] w-full">
        <div className=" flex flex-row ">
          <FootPart />
        </div>
        <div className="bg-[#fff] my-5 flex justify-center gap-20">
          <div>
            <p className="font-bold text-lg">Stay Connected</p>
          </div>
          <div className="flex gap-4 text-center items-center justify-center my-auto">
            <div className="text-center items-center justify-center my-auto">
              <TiSocialFacebook className="size-8 hover:text-[#f4f4f4] " />
            </div>
            <div className="text-center items-center justify-center my-auto">
              <BsTwitter className="size-6 hover:text-[#f4f4f4]" />
            </div>
            <div className="text-center items-center justify-center my-auto">
              <BsYoutube className="size-6 hover:text-[#f4f4f4]" />
            </div>
            <div className="text-center items-center justify-center my-auto">
              <BsLinkedin className="size-6 hover:text-[#f4f4f4]" />
            </div>
            <div className="text-center items-center justify-center my-auto">
              <BsInstagram className="size-6 hover:text-[#f4f4f4]" />
            </div>
          </div>
        </div>
        <div className="bg-pink-100 h-[300px] flex justify-between">
          <div>41</div>
          <div>
            <div>
              <ULli
                title={"Customer Service"}
                content={[
                  "About Us",
                  "About Us",
                  "About Us",
                  "About Us",
                  "About Us",
                ]}
              />
            </div>
            <div></div>
          </div>
          <div>41</div>
          <div>41</div>
        </div>

        <footer className=" bg-[#391e66] pt-5 h-16  items-center text-white pl-20 ">
          <p className="gap-4 items-center flex flex-row justify-center font-bold">
            <span className="">&copy;</span> 2024 Puja Products Store. All
            rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

{
  /* <div>
        <h1>BUY SPIRITUAL ITEMS ONLINE AT VEDIC VAANI</h1>
        <p>
          Every prayer ritual in Hinduism should be performed exactly as the
          sacred writings say. A place of worship in your house or mandir has to
          reflect all the spirituality for you to be able to pay tribute to the
          Gods and the Goddesses properly. For this to happen, Vedic Vaani
          offers an astonishing variety of prayer vessels, cloth, beads,
          sculptures, and a myriad of other Pooja accessories online. Our store
          opens its doors to everyone willing to get a divine blessing for
          well-being and good fortune.
        </p>

        <p>
          Vedic Vaani is an all-in-one source of Puja items, Holy Books,
          statues, and Hindu idols for sale. If you want to make a spiritual
          ritual to honor a special guest, celebrate a wedding day, or mark any
          other remarkable event while worshiping the Gods with all your heart,
          we know what will be the very thing. Whether it’s for Puja or Yagna,
          you will find everything you need in our catalog. From Rudraksha,
          Yantras to Shaligrams and gemstones – our range includes all items
          required for ritual practices. Even if you are looking for a Ganesh,
          Shiva or Buddha statue, buy it online at Vedic Vaani in a few clicks.
        </p>

        <p>
          create favorable conditions for worship at your place, it’s up to you
          to opt for Agarbatti or Dhoops. These aromatic sticks allow you to
          offer the most pleasant incense to various deities. At our store, they
          are available in many forms and fragrances.
        </p>

        <h2>WE GUARANTEE THE HIGHEST QUALITY</h2>
        <p>
          Vedic Vaani enables you to direct the flow of positive energy to your
          household with Puja items at wholesale prices. Every product available
          in our catalog is 100% authentic and made with your spiritual needs in
          mind. Here you will also come across many skillfully handcrafted
          idols, statues, and accessories. When shopping with us, you can not
          only buy spiritual items online but get gifts with your order. Take a
          look at our range of products and perform your Puja right!
        </p>
        <h3>MOST SEARCHED FOR ON OUR STORE</h3>
        <div
          className="widget block block-static-block"
          style={{ textAlign: "justify" }}
        >
          <div className="item-list">
            {/* List of most searched items */
}
{
  /* You can replace this with your dynamic content if needed */
}
