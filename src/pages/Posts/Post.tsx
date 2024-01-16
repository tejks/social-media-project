import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useDeletePostMutation, useGetCommentsByPostIdQuery, useGetPostQuery } from '@common/API/services/post';
import { useTypedSelector } from '@common/store';
import { selectCurrentUser } from '@common/store/authSlice';

import { useCreateCommentMutation, useDeleteCommentMutation } from '@/common/API/services/comment';
import PostElement from '@/components/PostElement';
import AddElementWithTextarea from '@components/AddElementWithTextarea';
import Comment from '@components/Comment';

import PostSkeleton from '@/components/elements/Skeleton/PostSkeleton';
import backgroundElement1 from '@assets/background-element-1.png';

type PostRouteParams = {
  id: string;
};

const Post: React.FC = () => {
  const { id } = useParams<PostRouteParams>();
  const navigate = useNavigate();

  const currentUser = useTypedSelector(selectCurrentUser);

  const {
    data: post,
    isLoading: isPostLoading,
    isFetching: isPostFetching,
    refetch: refetchPost,
  } = useGetPostQuery(id as string);
  const {
    data: comments,
    isLoading: isCommentsLoading,
    refetch: refreshComments,
  } = useGetCommentsByPostIdQuery(id as string);

  const [createComment] = useCreateCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();
  const [deletePost] = useDeletePostMutation();

  useEffect(() => {
    refetchPost();
  }, [currentUser, refetchPost]);

  const onCommentCreate = async (id: string, text: string) => {
    try {
      await createComment({
        postId: id,
        content: text,
      });
      Promise.all([refetchPost(), refreshComments()]);
    } catch (error) {
      console.error(error);
    }
  };

  const onCommentDelete = async (id: string) => {
    try {
      await deleteComment(id);
      Promise.all([refetchPost(), refreshComments()]);
    } catch (error) {
      console.error(error);
    }
  };

  const onPostDelete = async (id: string) => {
    try {
      await deletePost(id);
      navigate('/posts');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="container mx-auto flex justify-center">
      <div className="fixed bottom-0 right-0 -z-10 rotate-180 opacity-30 xl:opacity-70">
        <img src={backgroundElement1} alt="" width={200} />
      </div>

      <div className="relative z-10 flex w-full flex-col justify-center px-4 md:max-w-4xl md:px-24 lg:px-24 xl:px-24">
        <div
          className="absolute left-6 hidden h-11 w-11 cursor-pointer items-center justify-center rounded-full text-white hover:text-[#FB9D1F] md:top-48 md:flex "
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
          {post && comments && !isCommentsLoading && !isPostLoading && !isPostFetching ? (
            <PostElement post={post} route={false} auth={currentUser} onPostDelete={onPostDelete} />
          ) : (
            <PostSkeleton />
          )}
        </div>

        <section className="pt-16 antialiased">
          <div className="mx-auto max-w-2xl px-4">
            <AddElementWithTextarea
              name="comment"
              isAuth={!!currentUser}
              textareaRows={2}
              onAdd={({ text }) => (post ? onCommentCreate(post.id, text) : null)}
            />

            {comments
              ? comments.map((comment, index) => (
                  <Comment
                    key={index}
                    commentId={index}
                    comment={comment}
                    onCommentDelete={(id) => onCommentDelete(id)}
                    authUserId={currentUser?.userId}
                  />
                ))
              : null}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Post;
