import { useEffect, useState } from 'react';

import { useGetAllPostsQuery } from '@common/API/services/post';
import { useTypedSelector } from '@common/store';
import { selectCurrentUser } from '@common/store/authSlice';

import PostTextarea from '@components/AddElementWithTextarea';
import PostElement from '@components/PostElement';
import ScrollToTop from '@components/ScrollToTop';
import PostSkeleton from '@components/elements/Skeleton/PostSkeleton';

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
    <section id="posts-section" className="container mx-auto flex justify-center">
      <div className="posts__context w-full md:max-w-4xl flex flex-col px-4 justify-center lg:border-x lg:border-gray-800 md:px-24 lg:px-16 xl:px-24">
        <h1 className="posts__header text-3xl font-semibold text-white mt-32">Posts</h1>
        <hr className="my-4 border-gray-800" />

        <PostTextarea name="post" isAuth={!!user} onAdd={({ text }) => onPostAdd(text)} />

        <div className="posts__posts-list flex flex-col justify-center">
          {posts && !isLoading
            ? posts.map((post) => <PostElement key={post.id} post={post} />)
            : Array.from(Array(10).keys()).map((_, index) => <PostSkeleton key={index} />)}
        </div>
      </div>

      <ScrollToTop />
    </section>
  );
};

export default Posts;
