import { UserHeader } from "./UserHeader";
import { Routes, Route } from "react-router-dom";
import { Feed } from '../Feed/Feed';
import { UserPhotoPost } from '../User/UserPhotoPost';
import { UserStats }from '../User/UserStats';
import { useContext } from "react";
import { UserContext } from "../../UserContext";

export const User = () => {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
        <UserHeader />
        <Routes>
            <Route path="/" element={<Feed user={data.id}/>}/>
            <Route path="/postar" element={<UserPhotoPost />}/>
            <Route path="/estatisticas" element={<UserStats />}/>
        </Routes>
    </section>
  )
}
