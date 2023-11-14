import { useGetAllPostsQuery } from '../../common/API/services/post';
import { ScrollToTop } from '../../components/ScrollToTop';
import PostSkeleton from '../../components/elements/Skeleton/PostSkeleton';
import PostTextarea from '../../components/AddElementWithTextarea';
import { selectCurrentUser } from '../../common/store/authSlice';
import { useTypedSelector } from '../../common/store';
import { useEffect, useState } from 'react';
import PostElement from '../../components/PostElement';

const Posts: React.FC = () => {
  const user = useTypedSelector(selectCurrentUser);
  const { data, isLoading } = useGetAllPostsQuery();
  const [posts, setPosts] = useState(data ?? []);

  const onPostAdd = (text: string) => {
    const newPosts = [{ body: text, id: posts.length + 1, title: 'New post', userId: 1 }, ...posts];
    setPosts(newPosts);
  };

  useEffect(() => {
    if (data) setPosts(data);
    console.log('updated');
  }, [data]);

  return (
    <section className="w-screen flex justify-center">
      <div className="flex flex-col justify-center border-x border-gray-800 w-2/5 px-24">
        <h1 className="text-3xl font-semibold text-white mt-32">Posts</h1>
        <hr className="my-4 border-gray-800" />
        <PostTextarea name="post" isAuth={!!user} onAdd={({ text }) => onPostAdd(text)} />

        {posts && !isLoading
          ? posts.map((post) => <PostElement key={post.id} post={post} />)
          : Array.from(Array(10).keys()).map((_, index) => <PostSkeleton key={index} />)}
      </div>
      <ScrollToTop />
    </section>
  );
};

export default Posts;
