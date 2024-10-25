import { FeedPhotosItem } from "./FeedPhotosItem";
import { useFetch } from "../../Hooks/useFetch";
import { useEffect } from "react";
import { Error } from "../Helper/Error";
import { Loading } from "../Helper/Loading";
import { PHOTOS_GET } from "../../api";
import styles from "./FeedPhotos.module.css";

export const FeedPhotos = ({setModalPhoto}) => {
  const {data, loading, error, request} = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
        const {url, options} = PHOTOS_GET({page: 1, total: 6, user: 0});
        const {response, json} = await request(url, options);
    }
    fetchPhotos();
  }, [request]);

  if(error) return <Error error={error} />;
  if(loading) return <Loading />
  if(data)

  return (
    <ul className={`${styles.feed} animeLeft`}>
        {data.map(photo => <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto}/>)}
    </ul>
  );
  else return null;
}
