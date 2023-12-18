import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useGetCommentsForPostQuery } from '@common/API/services/comment';
import { useGetPostQuery } from '@common/API/services/post';
import { useTypedSelector } from '@common/store';
import { selectCurrentUser } from '@common/store/authSlice';

import PostElement from '@/components/PostElement';
import AddElementWithTextarea from '@components/AddElementWithTextarea';
import Comment from '@components/Comment';

type PostRouteParams = {
  id: string;
};

const Post: React.FC = () => {
  const navigate = useNavigate();
  const user = useTypedSelector(selectCurrentUser);
  const { id } = useParams<PostRouteParams>();
  const { data: post, isLoading: isPostLoading } = useGetPostQuery(Number(id));
  const { data: comments, isLoading: isCommentsLoading } = useGetCommentsForPostQuery(Number(id));

  if (isPostLoading && isCommentsLoading) return 'Loading...';
  if (!post) return 'Post not found';

  return (
    <section className="container mx-auto flex justify-center">
      <div className="relative z-10 flex w-full flex-col justify-center px-4 md:max-w-4xl md:px-24 lg:border-x lg:border-gray-800 lg:px-24 xl:px-24">
        <div
          className="absolute left-6 hidden h-11 w-11 cursor-pointer items-center justify-center rounded-full text-white hover:text-sky-600 md:top-40 md:flex "
          onClick={() => navigate('/posts')}
        >
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
        </div>

        <div className="post__post-box mt-40 flex flex-col justify-center">
          <PostElement post={post} route={false} />
        </div>

        <section className="py-10 antialiased">
          <div className="mx-auto max-w-2xl px-4">
            <AddElementWithTextarea name="comment" isAuth={!!user} onAdd={() => {}} />

            {comments?.map((comment, index) => <Comment commentId={index} comment={comment} />)}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Post;
