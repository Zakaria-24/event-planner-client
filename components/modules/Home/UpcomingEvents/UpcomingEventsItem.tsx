"use client";

import { Button } from "@/components/ui/button";
import { monthNameList } from "@/constants";
import { TEvent } from "@/types/event.type";
import { BadgeDollarSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const UpcomingEventsItem = ({ event }: { event: TEvent }) => {
  return (
    <div
      key={event.id}
      className="rounded overflow-hidden shadow-lg flex flex-col h-full bg-white"
    >
      <div className="relative h-[200px] w-full">
        <Image
          fill
          className="object-cover w-full h-full"
          src={event.image}
          alt={event.title}
        />
        <div className="hover:bg-transparent transition duration-300 absolute inset-0 bg-gray-900 opacity-25" />
        <div className="absolute bottom-0 left-0 bg-primary px-4 py-2 text-white text-sm hover:bg-white hover:text-primary transition duration-500 ease-in-out flex gap-1 items-center">
          {event?.fee == 0 ? (
            <>
              <BadgeDollarSign size={18} /> <span>Free</span>
            </>
          ) : (
            <>
              <BadgeDollarSign size={18} /> <span>{event?.fee}</span>
            </>
          )}
        </div>
        <div className="text-sm absolute top-0 right-0 bg-primary px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-primary transition duration-500 ease-in-out">
          <span className="font-bold">
            {new Date(event.startDate).getUTCDate()}
          </span>
          <small>{monthNameList[new Date(event.createdAt).getMonth()]}</small>
        </div>
      </div>

      <div className="px-6 py-4 flex-1 flex flex-col justify-between">
        <div>
          <Link
            href={`/events/${event.id}`}
            className="font-semibold text-lg inline-block dark:text-black hover:text-primary transition duration-500 ease-in-out"
          >
            {event.title}
          </Link>
          <p title={event.description} className="text-gray-500 text-sm line-clamp-3">
            {event.description}
          </p>
        </div>
        <div className="px-6 py-4 flex flex-row items-center">
          <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
            <Button className="dark:text-white">
              <Link href={`/events/${event.id}`} className="dark:text-white">
                Join Now
              </Link>
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventsItem;
