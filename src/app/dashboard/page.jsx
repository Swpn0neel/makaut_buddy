import React from "react";
import Tabs from "../ui/tabs";
import Card from "../ui/card";
import SearchBar from "./searchbar";
import Options from "./options";
import { auth } from "@clerk/nextjs/server";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import AddIcon from "@mui/icons-material/Add";
import { redirect } from "next/navigation";

import { SignedIn, UserButton } from "@clerk/nextjs";

export default function page() {
  const { userId, sessionClaims } = auth();

  const isAdmin = sessionClaims?.metadata?.role === "admin";
  return (
    <div className="h-full flex">
      <div className="flex flex-col justify-between basis-1/12 pt-28 bg-[#FFFFFF05] border-r-2 border-[#FFFFFF20]">
        <div className="flex justify-center items-center"></div>
        <div className="flex justify-center items-center">
          {/* <SignedIn>
            <UserButton
              appearance={{
                layout: { shimmer: true },
                variables: {
                  borderRadius: "0.5",
                  colorBackground: "#d9d9d9",
                  colorInputBackground: "#d9d9d9",
                  colorPrimary: "#171717",
                },
                elements: {
                  avatarBox: "h-12 w-12 ",
                  userButtonPopoverFooter: "hidden",
                },
              }}
            />
          </SignedIn> */}
        </div>
      </div>
      <div className="basis-11/12 flex flex-col px-12 pt-28 pb-5 gap-2">
        <div className="flex items-center justify-between pb-2">
          <div className="text-6xl text-[#D9D9D9] font-medium">Dashboard</div>
          <div className="flex justify-center items-center">
            <SignedIn>
              <UserButton
                appearance={{
                  layout: { shimmer: true },
                  variables: {
                    borderRadius: "0.5",
                    colorBackground: "#d9d9d9",
                    colorInputBackground: "#d9d9d9",
                    colorPrimary: "#171717",
                  },
                  elements: {
                    avatarBox: "h-12 w-12 ",
                    userButtonPopoverFooter: "hidden",
                  },
                }}
              />
            </SignedIn>
          </div>
        </div>
        <Tabs />
        <SearchBar />
        <Options />
        <div className="h-full flex border-2 border-[#FFFFFF20] rounded-lg">
          <div className="flex flex-col basis-1/3 justify-between py-8 pl-10">
            <div className="">
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "#FFFFFF80",
                        "&.Mui-checked": {
                          color: "#D9D9D9",
                        },
                      }}
                    />
                  }
                  label="Video Tutorials"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "#FFFFFF80",
                        "&.Mui-checked": {
                          color: "#D9D9D9",
                        },
                      }}
                    />
                  }
                  label="Handwritten Notes"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "#FFFFFF80",
                        "&.Mui-checked": {
                          color: "#D9D9D9",
                        },
                      }}
                    />
                  }
                  label="Previous Year Questions"
                />
              </FormGroup>
            </div>
            <div className="">
              {isAdmin && (
                <>
                  <div className="flex items-center gap-3">
                    <div className="p-0.5  border-2 border-[#FFFFFF80] rounded-full flex justify-center items-center">
                      <AddIcon
                        sx={{
                          color: "#D9D9D9",
                          fontSize: 15,
                        }}
                      />
                    </div>
                    <div className="text-white justify-center items-center">
                      Add Resources
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="basis-2/3 grid grid-cols-2 p-1">
            <Card
              title="Engineering Drawing"
              description="Chipi chipi, chapa chapa dubi dubi, daba daba magico mi dubi dubi boom, boom, boom"
            />
            <Card
              title="Engineering Drawing"
              description="Chipi chipi, chapa chapa dubi dubi, daba daba magico mi dubi dubi boom, boom, boom"
            />
            <Card
              title="Engineering Drawing"
              description="Chipi chipi, chapa chapa dubi dubi, daba daba magico mi dubi dubi boom, boom, boom"
            />
            <Card
              title="Engineering Drawing"
              description="Chipi chipi, chapa chapa dubi dubi, daba daba magico mi dubi dubi boom, boom, boom"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
