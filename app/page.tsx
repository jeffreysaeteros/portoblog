import Posts from "@/components/Posts";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <section>

      <p className="prose prose-neutral dark:prose-invert">
        Jeffrey Saeteros is a skilled developer and recent Computer Science graduate from New York University. Currently a Flutter Developer at PeopleTime LLC, he is leading the creation of a cross-platform calendar app that synchronizes events seamlessly for over 100 users, leveraging his expertise in Flutter, Firebase, and state management.

        With a strong background in IT and data analysis, Jeffrey has contributed to optimizing IT infrastructure at NYU and enhancing data efficiency at BroadStreet Institute. His work demonstrates a commitment to building innovative, user-focused solutions that solve complex problems and drive efficiency across diverse industries
      </p>

      <Posts />
    </section>
  );
}