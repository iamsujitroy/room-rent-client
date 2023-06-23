import React, { useEffect, useState } from "react";
import Rooms from "../Rooms";
import { useQuery } from "react-query";
import token from "@/services/auth";

export default function RecentlyListedRooms() {
  async function fetchRooms() {
    const response = await fetch(`${process.env.API_BASE}/room/recent`, {
      headers: {
        credentials: 'include',
        Authorization: token
      },
    });
    return response.json();
  }

  const { data: rooms } = useQuery("recent-furnished-rooms", fetchRooms);

  return <Rooms header="Recently Listed" rooms={rooms?.data} />;
}
