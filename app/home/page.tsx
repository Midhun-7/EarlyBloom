"use client";
import React from "react";

export default function HomePage() {
  const concernCards = [
    {
      text: "Is your child easily distracted?",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAMRNbsd4d9PnA-nLvVHwWIDl3oxngYry3YLHigAchYStjSlMnqu1xzL8MBCM9xLTcH5-CG8znllmOX0JSfRqU8Sz-dvz4ve-QFKONmyqvZgCv8sct5IxzTqcauj4ZIPv6QTagyrkI3TFyqY2zHWnj4jxKG8Wo9d1DB9leD089sMXTdVxBSxjp4lbID8QiBxCE_NjkPFCvmhxCaQz5uf3NpULG9TeV9qG4DjU4wt-hGVP0KFBpjCIt_qGUZuROJd7nNxCaBclfwlCk",
    },
    {
      text: "Speech development concerns?",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD0w6kcELHbo0h90Scuw1LrFs66onCmpV27kbM4OM5lpgoZE3qtfH10suKN8mansuxJvMUYaVsD4ipceD3-fd4u3HkgDkJlTJtZk1JrwTJ1fm0NZ-etSiae4bazjYT30lKbTvaPnjdD89z7ZPAv3-MoyMFR-nYY_NOFWcU7vC9PsdjakeRfcLcxwc9PkL9t_j-ovg0o9pEwTdONPB0PC8EyytJx7IBecblh2IyDHlKTMqwj5LJQII8wPUCHrAfVwP-KSz6DOKt1VwM",
    },
    {
      text: "Difficulty following instructions?",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCjV0t8dp3DFmWGuIBCxnHHbQs0FdQW_p1iks1WjizSbzFS4ML8lX5GKiThd1eFPulVjOTD4DjtuxDJeqJaapsvyBumh1m5qXkrqtl7dp4rrXtuPPR6uNRYA1sYH-bpwdFECwA_SV1N9b-xJl7V0OgEva5RvcW-LaYOHy0AD0cA-5x73ymKf1xbk3omhqjJ98UXtlyp1G1y5do2frt8Pe2Vy59ZRmPU7bzAwdeTKAn1Kmc9bre0mJDoe8d5WHL7EHLfVpa1lcitzsU",
    },
    {
      text: "Trouble with social play?",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDyswzR1IGxl906ndVsSMwfXZNbB56ANs7a7N21MaItaHctcHjbAypRAQzFKJs585pbu244yGXewxa_EY_MqYS5HMZwmu01ZNi27i8eUE2jJmaKvVVpJLLegg0_ldqdaeYhOqUCBZP03zKhFOjfNAI6G5UuJHM0gIknhooFC_ygbw7t17PJATKPtpSKOnCs9h9eQkRbMTEfSZmtEaoXOpFt79ESTPS0RVlx1AVcKr1tCEM8MYaUCcUPhZaV9FRe9vqdpUkMsRD-coE",
    },
    {
      text: "Issues with sleep patterns?",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCGFGBbMt7RtHPwpCprG0aRGQ663fa_cBQFm6amfrhyo2xFSoDdWaTttjTBFLPFr6XL4Q_et2UGUT5ITyFKZzeGebY-D7GcKYAJHpV_W11FZOUkybE67r7Nw4NYElAz-plUShyWmQzR3Z8-dbmwvQLj-nBu8xgUfTh7TknHbxzgL3Qlalubw07w7VkkoAVazs8HpnYp2YXO4_daidvgf0jITTmzz2CulD_zuWhNOfYNS6UMSSkJUFQ0_gq0z6_ggSbQLBihD9DM-GQ",
    },
  ];

  const activities = [
    {
      title: "Memory Match Game",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDUcphGZPx17qwFcaqSbgQ972R7b6Hhn2XCct5c_EEozYdXW780X3FolKqUFlIFhLeBEvpPvgSFM45owj4oqO3CZlckEY3B18_NLtNI6uM_5ysSMNewOhOb5DdrDb6IjPL97jliEeuY-WHf7IsZOo4hxn4tMu8rw9pzks3kG0Oi3yRWdU9EsbpPzuXH6E3yQJ8LjKj5FSwTFRTbynI9CUimDEfuszJ4_mAzS51qhJ2Gsi2eQkMNHeDQdjenUkp74MbObs3zBHrGLuc",
    },
    {
      title: "Simon Says Challenge",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBWXE5tpwYXgmYOSjnL6YHqEiS4j8PteCFzqwMKojusWnr8PNoK3xiWRII7Va9E_X9GsT1ZznnFfYxPkFNhgR3TD-tFMkN6EIleHzd4hcUg_5HZTJZsEp49vS7dIZ7M5lrBZQWu1kwR_3J0JFRzjg4sK3LmYtIFM8WENS8HxEEuk6NUGC60EJMOSSADYqINYirlf8bkDU9qUtbZe03ZT6x-vYaEKMFlP7u7L0OTK64T4whsjAyfAT1bYjw2e8OWt1MMXBPxn3K5F1U",
    },
    {
      title: "Shape Sorter Task",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAaTgS0_b7pE1TFj84flzgnOtL6LDcPXdloA_JRdvFvFUtLF5IO1H5MbfmOxIMYXQYv9Rdj3vBuEvV3G2VXL7UunggvwPK7_Sm30m6SjmY8FspUoP8-x8e7sNm99w8ChFqDdJLmmgyhbATwKbjvF6RkNNhslcfnDnmjLn_zArEJk8Jm6nnTtKJQloBP5RsFLdxbSaFe3m-Rq8U1kEJ02BrbqcdEHjjk_gamKBhrT9qice1RzbV8Bg-4Bd1WYH-irmYFA3cgtPfkGVQ",
    },
    {
      title: "Sequence Puzzle Game",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB83B8zvErzxQ2wKqj1TIG3xVkqqXPwsl7Lt2Z-r6KBN_DsyxgkiyS0fg-34oc7EUoDbwwazyVYI8nDonR6-PPIbBRqXw4YQWKoxZIAEeFG94GQri1Bvky6TzqcgdIxdON--24jJtd92s9MGif6oDPq_XMfge13qcOUFwOBgqviC4yWRYJ8DgouDT68cIojTG1RYq_S6JwB7jz4EOXsaXQUzOubgxRAptSAbST8ezGN1TGpopenocE-ALxpIRg3lN-UJKZ41T_sWwM",
    },
    {
      title: "I Spy Game",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD-SyUxq7IZzzLu5Ihmi4cT2u-aekhlCbkPYynC4nPDgeDnX31mV-BG6fFFqNga_YYkAamuJC-f0mAa9g9A8KPL1lQ1lWa0s3thET1T12sqON5j51tCOm3iB-9F_7qa_5afE5GCUNbf2MRlqxmhsU7qOowbhIxdm9ZGqhMA_8XpNzHzioZu50ipxREVytaKy41VziZK3emhAtCShqQX664R2mvylbcjieve_Jh0SuggLOUgM0R_V3DKQD9Xxu1ioWbGaUFuR6PYXwM",
    },
  ];

  return (
    <div className="min-h-screen font-lexend bg-white text-[#111518]">
      {/* Section 1: Concern Cards */}
      <section className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-4">Do you have any of these concerns ?</h2>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {concernCards.map((card, i) => (
            <div
              key={i}
              className="min-w-[280px] rounded-xl bg-blue-50 p-4 shadow hover:shadow-md transition"
            >
              <img
                src={card.image}
                alt={card.text}
                className="rounded-lg mb-3 h-40 w-full object-cover"
              />
              <p className="mb-2 font-medium">{card.text}</p>
              <button className="bg-[#34a3f3] text-white px-4 py-1 rounded-full text-sm">
                Explore
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Family Health Data Strip */}
      <section className="flex flex-col md:flex-row w-full bg-white px-6 py-10 gap-6 items-center justify-center">
        {/* Left: Image Card with background blend */}
        <div className="flex-1">
          <div className="bg-white rounded-xl overflow-hidden h-full flex items-center justify-center">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC0vzh51zeaqinv_ZssgEaEATx0xG_l_cmaeeaGenKpIUKZN4ic7biX3HY-0XaofWdUglM8cu_PLTLXba4KVQmjLh_1ZqNRxYWhB6RnGFHlST7hwTIk04yHR-jZsgSHjY3A5WYkf07HC47MG40wvZM8DzkjgpWdqprWIMLz5_h6pAqTmqG1OfLS08o2rE3YRlN-H40E7lS7JfMoQ0CXEQ2NQ3RHtsaswpGhhY05b6BYkw7CjgrtTvBu1pE9r6YFyMlkJokoJfGE6I"
              alt="Family Health Data"
              className="object-contain w-full h-[500px] rounded-lg"
            />
          </div>
        </div>

        {/* Right: CTA Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold leading-snug text-[#111518] max-w-xl md:max-w-full mx-auto md:mx-0 pb-4">
            Complete your family health history <br />
            to personalize insights
          </h2>

          <button className="bg-[#34a3f3] text-white font-medium px-6 py-2 rounded-full hover:bg-white hover:border hover:text-[#34a3f3] hover:border-[#34a3f3] transition">
            Enter Family Health Data
          </button>
        </div>
      </section>

      {/* Section 3: Interactive Activities */}
      <section className="px-6 py-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">
          Interactive Activities for Cognitive Growth
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {activities.map((activity, i) => (
            <div
              key={i}
              className="rounded-xl bg-white p-4 shadow hover:shadow-md transition"
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="rounded-lg mb-3 h-40 w-full object-cover"
              />
              <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
              <button className="bg-[#34a3f3] text-white px-4 py-1 rounded-full text-sm">
                Start Activity
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Progress Overview */}
      <section className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-2">Your Child’s Progress</h2>
        <p className="text-[#60798a] mb-4">
          Track milestones and activity history.
        </p>
        <button className="bg-[#34a3f3] text-white px-6 py-2 rounded-full font-medium">
          View Reports
        </button>
      </section>

      {/* Footer */}
      <footer className="flex justify-center gap-6 border-t border-gray-200 py-6 text-sm text-[#60798a]">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact Us</a>
      </footer>
    </div>
  );
}
