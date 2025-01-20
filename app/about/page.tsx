import Posts from "@/app/components/Posts";
import Image from "next/image";
import profilePic from "/public/images/profile.jpg";
import React from "react";

export default function Page() {
    return (
        <div className="flex gap-8">
            <div>
                <Image
                    src={profilePic}
                    alt="Description of the image"
                />
            </div>
            <section>
                <h1 className="font-lg text-3xl mb-8">About Jeffrey</h1>
                <p className="font-medium">
                    I'm a software and mobile developer with a passion for building user-friendly, accessible, and responsive applications. I have a strong background in data analysis, automation, and web development, and I am constantly learning and improving my skills.
                    I've been involved in data analysis, automation, IT, and web development through personal projects by using technologies such as MERN, Java, Python, and JavaScript, and other frameworks such as React, Next.js, and TypeScript.
                </p>
                <br />
                <p className="font-medium">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure animi quos error, quas vel, inventore debitis magnam vero totam nesciunt ratione quae. Cumque dolor totam mollitia molestiae culpa asperiores doloribus.
                </p>
            </section>
        </div>
    );
}