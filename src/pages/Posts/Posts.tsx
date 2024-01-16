import { useCreatePostMutation, useGetAllPostsQuery } from '@common/API/services/post';
import { useTypedSelector } from '@common/store';
import { selectCurrentUser } from '@common/store/authSlice';

import PostTextarea from '@components/AddElementWithTextarea';
import PostElement from '@components/PostElement';
import ScrollToTop from '@components/ScrollToTop';
import PostSkeleton from '@components/elements/Skeleton/PostSkeleton';

import backgroundElement1 from '@assets/background-element-1.png';
import { useEffect } from 'react';

const Posts: React.FC = () => {
  const currentUser = useTypedSelector(selectCurrentUser);

  const {
    data: posts,
    isLoading: isPostsLoading,
    isFetching: isPostsFetching,
    refetch,
  } = useGetAllPostsQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  const [createPost] = useCreatePostMutation();

  const onPostCreate = async (text: string) => {
    try {
      createPost({
        content: text,
      }).then(() => refetch());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    refetch();
  }, [currentUser, refetch]);

  return (
    <section id="posts-section" className="container mx-auto flex justify-center">
      <div className="fixed bottom-0 right-0 -z-10 rotate-180 opacity-30 xl:opacity-70">
        <img src={backgroundElement1} alt="" width={200} />
      </div>

      <div className="posts__context flex w-full flex-col justify-center px-4 md:max-w-4xl md:px-24 lg:px-16 xl:px-24">
        <h1 className="posts__header mt-32 text-3xl font-semibold text-white">Posts</h1>
        <hr className="my-4 border-gray-800" />

        <PostTextarea name="post" isAuth={!!currentUser} onAdd={({ text }) => onPostCreate(text)} />

        <div className="posts__posts-list flex flex-col justify-center">
          {posts && !isPostsLoading && !isPostsFetching
            ? posts.map((post) => <PostElement key={post.id} post={post} auth={currentUser} />)
            : Array.from(Array(10).keys()).map((_, index) => <PostSkeleton key={index} />)}
        </div>
      </div>

      <ScrollToTop />
    </section>
  );
};

export default Posts;
