import React, { useEffect, useState } from "react";
import Rooms from "../Rooms";
import { useQuery } from "react-query";

export default function SemiFurnishedRooms() {
  async function fetchRooms() {
    const response = await fetch(`${process.env.API_BASE}/room/semi-furnished`);
    return response.json();
  }

  const { data: rooms } = useQuery("semi-furnished-rooms", fetchRooms);

  return (
    <Rooms header="Semi Furnished Rooms" rooms={rooms} />
  );
}
