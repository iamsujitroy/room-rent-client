import RoomCard from "@/components/Rooms/RoomCard/RoomCard";
import styles from "./index.module.scss";
import WithoutSearchLayout from "@/layouts/WithoutSearchLayout/WithoutSearchLayout";
import { useQuery } from "react-query";
import { getWishlist } from "@/services/apiClients/rooms";
// import token from "@/services/token";

export default function Wishlist() {
  const { data: rooms } = useQuery("wishlist-rooms", getWishlist);
  
  return (
    <WithoutSearchLayout>
      <div className={styles.wishlist}>
        {rooms?.data?.map((room) => (
          <RoomCard
            key={room._id}
            id={room._id}
            title={room.title}
            rent={room.rent_amount}
            currency={room.currency}
            deposit={room.deposit}
            security={room.security_amount}
            postedTime={room.postedTime}
            images={room.pictures?.[0]}
            location={room.location}
            apartment_type={room.apartment_type}
            path={`/room/${room._id}`}
            liked={true}
          />
        ))}
      </div>
    </WithoutSearchLayout>
  );
}
