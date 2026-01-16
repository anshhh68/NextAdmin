"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";

import { useState } from "react";
import { CameraIcon, EmailIcon, GitHubIcon, LinkedInIcon, LocationIcon, PhoneIcon } from "./_components/icons";

export default function Page() {
  const [data, setData] = useState({
    name: "ANSH PASWAN",
    coverPhoto: "/images/cover/cover-01.png",
  });

  const handleChange = (e: any) => {
    if (e.target.name === "coverPhoto") {
      const file = e.target?.files[0];

      setData({
        ...data,
        coverPhoto: file && URL.createObjectURL(file),
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div className="mx-auto w-full max-w-[970px]">
      <Breadcrumb pageName="Profile" />

      <div className="overflow-hidden rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div className="relative z-20 h-35 md:h-65">
          <Image
            src={data?.coverPhoto}
            alt="profile cover"
            className="h-full w-full rounded-tl-[10px] rounded-tr-[10px] object-cover object-center"
            width={970}
            height={260}
            style={{
              width: "auto",
              height: "auto",
            }}
          />
          <div className="absolute bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4">
            <label
              htmlFor="cover"
              className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-[15px] py-[5px] text-body-sm font-medium text-white hover:bg-opacity-90"
            >
              <input
                type="file"
                name="coverPhoto"
                id="coverPhoto"
                className="sr-only"
                onChange={handleChange}
                accept="image/png, image/jpg, image/jpeg"
              />

              <CameraIcon />

              <span>Edit</span>
            </label>
          </div>
        </div>
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="mt-8">
            <h3 className="mb-1 text-heading-6 font-bold text-dark dark:text-white uppercase tracking-wider">
              {data?.name}
            </h3>
            <p className="font-medium italic text-black/60 dark:text-white/60">Full-Stack Developer</p>

            <div className="mt-6 flex flex-col items-center gap-3 text-sm font-medium text-dark dark:text-white">
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2">
                  <EmailIcon className="h-4 w-4" />
                  <span>paswanansh68@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-4 w-4" />
                  <span>+91 97698 23409</span>
                </div>
                <div className="flex items-center gap-2">
                  <LocationIcon className="h-4 w-4" />
                  <span>Vadodara, Gujarat, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <GitHubIcon className="h-4 w-4" />
                  <a href="https://github.com/anshhh68" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/anshhh68</a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <LinkedInIcon className="h-4 w-4" />
                <a href="https://linkedin.com/in/ansh-paswan-388b2b370/" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/ansh-paswan-388b2b370/</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
