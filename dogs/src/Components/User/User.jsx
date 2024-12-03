import { UserHeader } from "./UserHeader";
import { Routes, Route } from "react-router-dom";
import { Feed } from '../Feed/Feed';
import { UserPhotoPost } from '../User/UserPhotoPost';
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { NotFound } from "../NotFound";
import { Head } from "../Helper/Head";

export const User = () => {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
        <Head title="Minha Conta" />
        <UserHeader />
        <Routes>
            <Route path="/" element={<Feed user={data.id}/>}/>
            <Route path="/postar" element={<UserPhotoPost />}/>
            <Route path='*' element={<NotFound />} />
        </Routes>
    </section>
  )
}
