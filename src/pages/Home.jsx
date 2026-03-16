import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import mapimage from "../assets/map.png";
import cultimage from "../assets/cultu.png";
import affarimage from "../assets/affar.png";
import amarimage from "../assets/amar.png";
import tigimage from "../assets/tig.png";
import somimage from "../assets/som.png";
import oroimage from "../assets/oro.png";
import nnpimage from "../assets/nnp.png";
import gabimage from "../assets/gab.png";
import guzimage from "../assets/gumuz.png";

function Home() {
  return (
    <div className="min-h-screen bg-[#f5f0e8] text-stone-900">
      <HeroSection />

      {/* Origin Ethiopia Paragraphs*/}
      <section className="py-20 px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-24 lg:mb-32">
            <span className="text-amber-700 font-bold tracking-widest uppercase text-xl lg:text-2xl bg-amber-100/70 px-10 py-4 rounded-full inline-block mb-12 font-serif shadow-2xl">
              ORIGIN OF ETHIOPIA
            </span>
            <h1 className="text-6xl lg:text-5xl xl:text-6xl font-serif font-black text-stone-900 leading-tight mb-8">
              Ethiopia's
              <span className="block lg:inline text-amber-800">
                {" "}
                Ancient Roots
              </span>
            </h1>
          </header>

          {/* 1 */}
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24 mb-24 lg:mb-32">
            <div className="lg:flex-1">
              <h3 className="text-1xl lg:text-2xl font-serif font-bold text-stone-900 italic mb-12 text-center">
                1. The Name Ethiopia
              </h3>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                The name "Ethiopia" comes from the Greek word Aethiopia, which
                means "land of burnt faces." This term was used by ancient
                Greeks to describe the region south of Egypt. Historically,
                Ethiopia was known for its powerful kingdoms, such as the
                Kingdom of Aksum, and its rich cultural heritage, including
                ancient traditions, languages, and religious practices. Over
                time, the name "Ethiopia" came to represent not just a
                geographic region but also a nation with a distinct identity,
                resilience, and a long-standing place in world history.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24 mb-24 lg:mb-32">
            <div className="lg:flex-1">
              <h3 className="text-1xl lg:text-2xl font-serif font-bold text-stone-900 italic mb-12 text-center">
                2. Ancient Records
              </h3>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                Ancient Egyptian records mention peoples living in the region as early as 980 BCE, highlighting Ethiopia’s long and continuous history. In the Bible, particularly in the Old Testament, the region is identified as Cush, referring to the lands south of Egypt. These early records show that Ethiopia was well-known to neighboring civilizations and played a significant role in trade, culture, and diplomacy. Over time, Ethiopia developed its own distinct kingdoms, languages, and traditions, which have contributed to its rich historical and cultural heritage.
              </p>
            </div>

           <div className="lg:w-80 lg:flex-shrink-0">
  <div 
    className="w-full h-48 lg:h-64 border border-[#f5f0e8] shadow-lg relative rounded-md overflow-hidden" 
    style={{ backgroundColor: "#f5f0e8" }} // Apply the target background color here
  >
    {/* The img needs to be absolutely positioned and have a blending mode */}
    <img 
      src={mapimage} 
      alt="Map of Ethiopia" 
      className="absolute inset-0 w-full h-full object-contain" 
      style={{ mixBlendMode: 'color-burn' }} // This burns the map color onto the #f5f0e8 bg
    />
  </div>
</div>
          </div>

          {/* 3 */}
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24 mb-24 lg:mb-32">
            <div className="lg:flex-1">
              <h3 className="text-1xl lg:text-2xl font-serif font-bold text-stone-900 italic mb-12 text-center">
                3. Ancient Kingdoms
              </h3>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                Ethiopia is home to some of the oldest and most remarkable kingdoms in African history. The Kingdom of D’mt, which existed around the 10th century BCE, is considered one of the earliest Ethiopian civilizations. Later, the Kingdom of Aksum (c. 100–940 CE) emerged as a powerful empire known for its impressive architecture, monumental obelisks, and role in international trade connecting Africa, the Middle East, and Asia. Aksum was also one of the first major civilizations to adopt Christianity in the 4th century CE, shaping the religious and cultural identity of Ethiopia for centuries. These ancient kingdoms laid the foundation for Ethiopia’s enduring legacy of political power, culture, and innovation.
              </p>
            
            </div>
          </div>

          {/* 4 */}
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24 mb-24 lg:mb-32">
            <div className="lg:flex-1">
              <h3 className="text-1xl lg:text-2xl font-serif font-bold text-stone-900 italic mb-12 text-center">
                4. Cultural and Religious Origins
              </h3>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                Ethiopia has a rich tapestry of cultural and religious traditions that date back thousands of years. The introduction of Christianity in the 4th century CE, particularly through the Ethiopian Orthodox Tewahedo Church, played a central role in shaping the country’s art, literature, and social structures. Ethiopia is also home to ancient Jewish communities, such as the Beta Israel, whose history intertwines with the region’s broader spiritual heritage. Traditional beliefs, music, dance, and oral storytelling have been preserved alongside these religions, creating a unique blend of cultural practices that continue to influence Ethiopian society today. This deep-rooted religious and cultural history reflects Ethiopia’s identity as one of the world’s oldest continuous civilizations.
              </p>
            </div>
            <div className="lg:w-80 lg:flex-shrink-0">
              <img
                src={cultimage}
                alt="Cultural Religious Origins"
                className="w-full h-55 lg:h-68 object-cover border border-[#f5f0e8] shadow-lg"
              />
            </div>
          </div>

          {/* 5 */}
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
            <div className="lg:flex-1">
              <h3 className="text-1xl lg:text-2xl font-serif font-bold text-stone-900 italic mb-12 text-center">
                5. Human Origins
              </h3>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                Ethiopia is often called the “cradle of humanity” because it is home to some of the oldest human fossils ever discovered. Remarkable finds, such as Lucy (Australopithecus afarensis) and other early hominids, date back millions of years and provide crucial insights into human evolution. The rich fossil record in regions like the Afar Triangle has made Ethiopia a key site for paleoanthropology, helping scientists trace the development of early humans and their migration across the globe. These discoveries not only highlight Ethiopia’s central role in understanding our species’ origins but also underscore the country’s enduring significance in the story of humanity.
              </p>
            </div>
          </div>

          {/* Ethiopian Identity and Diversity */}
          {/* Ethiopian Identity and Diversity Section */}
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24 mb-24 lg:mb-32">
            <div className="lg:flex-1 w-full">
              <h3 className="text-1xl lg:text-2xl font-serif font-bold text-stone-900 italic mb-12 text-center">
                Ethiopian Identity and Diversity
              </h3>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif w-full">
                Ethiopia is one of the most diverse countries in Africa, with
                more than 80 ethnic groups, many languages, cultures, and
                traditions. This diversity is reflected in the country&rsquo;s
                music, clothing, food, and cultural celebrations. Despite these
                differences, Ethiopians share a long history, strong cultural
                values, and pride in their nation. The country&rsquo;s identity
                has been shaped by centuries of civilization, independence, and
                cultural exchange among its many communities. Diversity is one
                of Ethiopia&rsquo;s greatest strengths because it brings unique
                perspectives and traditions that enrich the nation. However,
                Ethiopia still faces some challenges related to identity and
                unity.
              </p>
            </div>
          </div>
          {/* Ethiopian Challenges Section */}
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24 mb-24 lg:mb-32">
            <div className="lg:flex-1 w-full">
              <h3 className="text-1xl lg:text-2xl font-serif font-bold text-stone-900 italic mb-12 text-center">
                Current Challenges
              </h3>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif w-full">
                Despite its resilience, Ethiopia faces complex hurdles in 2026.
                The nation is working to balance ethnic federalism with national
                unity, while addressing internal security concerns and economic
                pressures. Solving land disputes and creating jobs for a rapidly
                growing youth population remain the most critical paths toward
                lasting peace and stability. AND ASLO ETHIOPIA HAS MANY NATION
                THAT HAVE BEEN FACING CHALLENGES IN THE LAST 10 YEARS AND THEY
                ARE STILL FACING CHALLENGES IN 2026 AND THE NATIONS ARE
                OROMO,AMHARA,TIGRAYAN,SOMALI,AFAR,SNNPR,GAMBELA AND GUMUZ AS I
                MEANTAINED IN THE NATION SECTION BELOW
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nations Sections - Full Content from each nation file */}
      <section className="py-20 px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Oromo */}
          <div
            className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24 mb-24 lg:mb-32"
            id="oromo"
          >
            <div className="lg:flex-1">
              <h3 className="text-1xl lg:text-2xl font-serif font-bold text-stone-900 italic mb-12 text-center">
                1. Oromo
              </h3>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                Largest ethnic group in Ethiopia with ancient Gadaa democracy
                system - UNESCO World Heritage. Features legendary warriors,
                Olympic champions, and unbreakable spirit.
              </p>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-4xl mx-auto">
                <strong>Language:</strong> Afaan Oromoo
              </p>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-4xl mx-auto">
                <strong>Culture:</strong> Irreecha thanksgiving festival,
                Geerarsa epic oral literature, Siqqee women's rights
                institution.
              </p>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                <strong>Location:</strong> Oromia Region (central, western,
                southern Ethiopia).
              </p>
            </div>
            <div className="lg:w-80 lg:flex-shrink-0">
              <img
                src={oroimage}
                alt="Oromo"
                className="w-full h-64 object-cover border border-[#f5f0e8] shadow-lg rounded-lg"
              />
            </div>
          </div>

          {/* Amhara */}
          <div
            className="flex flex-col lg:flex-row-reverse items-start gap-12 lg:gap-24 mb-24 lg:mb-32"
            id="amhara"
          >
            <div className="lg:flex-1">
              <h3 className="text-1xl lg:text-2xl font-serif font-bold text-stone-900 italic mb-12 text-center">
                2. Amhara
              </h3>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                <strong>Origin:</strong> Semitic origins from the northern and
                central highlands.
              </p>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                <strong>Language:</strong> Amharic (working language of federal
                government).
              </p>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                <strong>Culture:</strong> Rich literary tradition in Ge'ez and
                Amharic; "Shemma" hand-woven clothing.
              </p>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                <strong>Location:</strong> Amhara Region (North and Central
                Ethiopia).
              </p>
            </div>
            <div className="lg:w-80 lg:flex-shrink-0">
              <img
                src={amarimage}
                alt="Amhara"
                className="w-full h-64 object-cover border border-[#f5f0e8] shadow-lg rounded-lg"
              />
            </div>
          </div>

          {/* Tigrayan */}
          <div
            className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24 mb-24 lg:mb-32"
            id="tigrayan"
          >
            <div className="lg:flex-1">
              <h3 className="text-1xl lg:text-2xl font-serif font-bold text-stone-900 italic mb-12 text-center">
                3. Tigrayan
              </h3>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                <strong>Origin:</strong> Descendants of the Aksumite Empire.
              </p>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                <strong>Language:</strong> Tigrinya
              </p>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                <strong>Culture:</strong> Ancient rock-hewn churches and
                colorful Ashenda festival.
              </p>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                <strong>Location:</strong> Tigray Region (Northern Ethiopia).
              </p>
            </div>
            <div className="lg:w-80 lg:flex-shrink-0">
              <img
                src={tigimage}
                alt="Tigrayan"
                className="w-full h-64 object-cover border border-[#f5f0e8] shadow-lg rounded-lg"
              />
            </div>
          </div>

          {/* Somali */}
          <div
            className="flex flex-col lg:flex-row-reverse items-start gap-12 lg:gap-24 mb-24 lg:mb-32"
            id="somali"
          >
            <div className="lg:flex-1">
              <h3 className="text-2xl lg:text-3xl font-serif font-bold text-stone-900 italic mb-12 text-center">
                4. Somali
              </h3>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                <strong>Origin:</strong> Cushitic pastoralists with deep history
                in the Horn of Africa.
              </p>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                <strong>Language:</strong> Somali
              </p>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                <strong>Culture:</strong> Famous for oral poetry, camel
                husbandry, and Islamic scholarship.
              </p>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                <strong>Location:</strong> Somali Region (Eastern Ethiopia).
              </p>
            </div>
            <div className="lg:w-80 lg:flex-shrink-0">
              <img
                src={somimage}
                alt="Somali"
                className="w-full h-64 object-cover border border-[#f5f0e8] shadow-lg rounded-lg"
              />
            </div>
          </div>

          {/* Afar */}
          <div
            className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24 mb-24 lg:mb-32"
            id="afar"
          >
            <div className="lg:flex-1">
              <h3 className="text-1xl lg:text-2xl font-serif font-bold text-stone-900 italic mb-12 text-center">
                5. Afar
              </h3>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                <strong>Origin:</strong> Cushitic pastoralists of the harsh
                Danakil Depression and Red Sea coast.
              </p>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                <strong>Language:</strong> Afar
              </p>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                <strong>Culture:</strong> Camel herders and salt miners of the
                Afar Triangle.
              </p>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                <strong>Location:</strong> Afar Region (northeastern Ethiopia,
                Danakil Desert).
              </p>
            </div>
            <div className="lg:w-80 lg:flex-shrink-0">
              <img
                src={affarimage}
                alt="Afar"
                className="w-full h-64 object-cover border border-[#f5f0e8] shadow-lg rounded-lg"
              />
            </div>
          </div>

          {/* SNNPR */}
          <div
            className="flex flex-col lg:flex-row-reverse items-start gap-12 lg:gap-24 mb-24 lg:mb-32"
            id="snnpr"
          >
            <div className="lg:flex-1">
              <h3 className="text-2xl lg:text-3xl font-serif font-bold text-stone-900 italic mb-12 text-center">
                6. SNNPR
              </h3>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                <strong>Origin:</strong> Diverse ethnic groups from southern
                Ethiopia's highlands and lowlands.
              </p>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                <strong>Language:</strong> Multiple (Wolayta, Gamo, Dawro and
                others)
              </p>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                <strong>Culture:</strong> Rich cultural diversity with hundreds
                of ethnic groups.
              </p>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                <strong>Location:</strong> Southern Nations, Nationalities, and
                Peoples' Region.
              </p>
            </div>
            <div className="lg:w-80 lg:flex-shrink-0">
              <img
                src={nnpimage}
                alt="SNNPR"
                className="w-full h-64 object-cover border border-[#f5f0e8] shadow-lg rounded-lg"
              />
            </div>
          </div>

          {/* Gambela */}
          <div
            className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24 mb-24 lg:mb-32"
            id="gambela"
          >
            <div className="lg:flex-1">
              <h3 className="text-1xl lg:text-2xl font-serif font-bold text-stone-900 italic mb-12 text-center">
                7. Gambela
              </h3>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                <strong>Origin:</strong> Nilo-Saharan peoples from western
                Ethiopia's Gambela region.
              </p>
              <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed text-stone-800 font-serif max-w-4xl mx-auto">
                <strong>Language:</strong> Nuer, Anuak, Majang
              </p>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                <strong>Culture:</strong> Riverine fishing communities and
                cattle herders.
              </p>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                <strong>Location:</strong> Gambela Region (western Ethiopia,
                near South Sudan).
              </p>
            </div>
            <div className="lg:w-80 lg:flex-shrink-0">
              <img
                src={gabimage}
                alt="Gambela"
                className="w-full h-64 object-cover border border-[#f5f0e8] shadow-lg rounded-lg"
              />
            </div>
          </div>

          {/* Gumuz */}
          <div
            className="flex flex-col lg:flex-row-reverse items-start gap-12 lg:gap-24"
            id="gumuz"
          >
            <div className="lg:flex-1">
              <h3 className="text-1xl lg:text-2xl font-serif font-bold text-stone-900 italic mb-12 text-center">
                8. Gumuz
              </h3>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                <strong>Origin:</strong> Hunter-gatherers and small-scale
                farmers from northwestern Ethiopia.
              </p>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                <strong>Language:</strong> Gumuz
              </p>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                <strong>Culture:</strong> Traditional hunter-gatherers with
                unique musical traditions.
              </p>
              <p className="text-base lg:text-lg xl:text-xl leading-relaxed text-stone-800 font-serif max-w-1xl mx-auto">
                <strong>Location:</strong> Benishangul-Gumuz Region
                (northwestern Ethiopia).
              </p>
            </div>
            <div className="lg:w-80 lg:flex-shrink-0">
              <img
                src={guzimage}
                alt="Gumuz"
                className="w-full h-64 object-cover border border-[#f5f0e8] shadow-lg rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
