import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { useCreatePostMutation, useGetAllPostsQuery } from '@common/API/services/post';
import { useTypedSelector } from '@common/store';
import { selectCurrentUser } from '@common/store/authSlice';

import PostTextarea from '@components/AddElementWithTextarea';
import PostElement from '@components/PostElement';
import ScrollToTop from '@components/ScrollToTop';
import PostSkeleton from '@components/elements/Skeleton/PostSkeleton';

import { IPost } from '@/common/API/models/post.model';
import backgroundElement1 from '@assets/background-element-1.png';

const Posts: React.FC = () => {
  const currentUser = useTypedSelector(selectCurrentUser);
  const [site, setSite] = useState(1);
  const [displayPosts, setDisplayPosts] = useState<IPost[]>();

  const { data: posts, isLoading: isPostsLoading, refetch: refetchPosts } = useGetAllPostsQuery(site);

  const [createPost] = useCreatePostMutation();

  const onPostCreate = async (text: string) => {
    try {
      const post = await createPost({
        content: text,
      }).unwrap();

      setDisplayPosts((e) => [post, ...e!]);
    } catch (error) {
      // TODO: Handle error with notification
    }
  };

  useEffect(() => {
    if (posts) setDisplayPosts(posts.data);
  }, [posts]);

  useEffect(() => {
    refetchPosts();
  }, [currentUser, refetchPosts]);

  return (
    <section id="posts-section" className="container mx-auto flex justify-center">
      <div className="fixed bottom-0 right-0 -z-10 rotate-180 opacity-30 xl:opacity-70">
        <img src={backgroundElement1} alt="" width={200} />
      </div>

      <div className="posts__context flex w-full flex-col justify-center px-4 md:max-w-4xl md:px-24 lg:px-40 xl:px-32">
        <h1 className="posts__header mt-32 text-3xl font-semibold text-white">Posts</h1>
        <hr className="my-4 border-gray-800" />

        <PostTextarea name="post" isAuth={!!currentUser} onAdd={({ text }) => onPostCreate(text)} />

        <div className="posts__posts-list flex flex-col justify-center">
          {posts && !isPostsLoading && displayPosts ? (
            <InfiniteScroll
              hasMore={posts.meta.next ? true : false}
              dataLength={posts.data.length}
              next={() => setSite(site + 1)}
              loader={'Loading...'}
            >
              {displayPosts.map((post, id) => (
                <PostElement key={id} post={post} auth={currentUser} />
              ))}
            </InfiniteScroll>
          ) : (
            Array.from(Array(10).keys()).map((_, index) => <PostSkeleton key={index} />)
          )}
        </div>
      </div>

      <ScrollToTop />
    </section>
  );
};

export default Posts;
